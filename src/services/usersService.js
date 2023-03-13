import db from "../models/index" // tất cả các db trong mysql sẽ được export thành object db 
import bcrypt from 'bcryptjs'
const salt = bcrypt.genSaltSync(10);
let handleUserLogin = (email, password)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let userData ={}
            let isExist = await checkUsersEmail(email)
            if(isExist){
                //nếu có tồn tại
                let user = await db.Users.findOne({
                    where:{email:email},
                    attributes:['email','password','roleId'],
                    raw:true
                })
                if(user){
                    let check  = await bcrypt.compareSync(password,user.password);
                    if(check){
                        userData.error=0
                        userData.message='ok'
                        userData.user = user
                        delete user.password
                    }
                    else{
                        userData.error = 3
                        userData.message = 'mat khau khong dung'
                    }
                }
                else{
                    userData.error = 1
                    userData.message='nguoi dung khong ton tai'
                    userData.user = user
                }
                
            }
            else{
                //nếu không tồn tại
                userData.error = 1
                userData.message = 'email khong ton tai'
                
            }
            resolve(userData)
        } catch (error) {
            reject(error)
        }
    })
}

let checkUsersEmail = (useremail)=>{  //hàm check xem email có tồn tại hay không
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.Users.findOne({
                where:{email:useremail}
            })
            if(user){
                resolve(true)
            }
            else{
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
    })
}
let getAllUsers = (id)=>{ // id là req.body.type được gửi từ usercontroller
    return new Promise(async(resolve,reject)=>{
        try {
            let users = '' // tạo users là rỗng 
            if(id === 'all'){ // nếu type nhận được là 'all'
                users = await db.Users.findAll({ //hàm find all
                    attributes:{exclude:['password']}, // lấy tất cả các trường trừ password
                    
                })
            }
            if(id && id !=='all'){ // nếu type không phải all mà là 1 id
                users = await db.Users.findOne({ // hàm find one
                    where:{id : id}, 
                    attributes:{exclude:['password']},
                   
                })
            }
            resolve(users) // return về user tìm được, nếu không có gì sẽ là rỗng như lúc khai báo
        } catch (error) {
            reject(error)
        }
    })
}
let checkEmail = async(email)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user =await db.Users.findOne({
                where:{email:email}
            })
            if(user){
               
                resolve(true)
            }
            else{
                
                resolve(false)
            }
        } catch (error) {
            reject(error)
        }
       
    })
}

let createNewUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let check = await checkEmail(data.email)
            if(check){
                resolve({
                    error:1,
                    message:'email da ton tai',
                    email:data.email,
                })
            }
            else{
                let hashUserPasswordFromBcrypt = await bcrypt.hashSync(data.password, salt);
                await db.Users.create({
                    firstName: data.firstName,
                    lastName: data.lastName,
                    password:hashUserPasswordFromBcrypt,
                    email: data.email,    
                    address:data.address,
                    gender:data.gender ==='1' ? true : false ,
                    phoneNumber:data.phoneNumber,
                    roleId:data.roleId,                
                })
                resolve({
                    error:0,
                    message:'ok',
                })
            }
           
        } catch (error) {
            reject(error)
        }
    })
}
let deleteUser = (id)=>{
    return new Promise(async(resolve,reject)=>{
       try {
        let user = await db.Users.findOne({
            where:{id : id},
            raw:false,
        })
        if(user){
            user.destroy()
            resolve({
                error:0,
                message:'delete success'
            })
        }
        else{
            resolve({
                error:1,
                message:'cant find user'
            })
        }
        
       } catch (error) {
        reject(error)
       }
    })
}
let test =(data)=>{
    return new Promise(async(resolve,reject)=>{
        resolve({
            error:1,
            message:'email da ton tai',
            email:data.email,
        })
    })
}
let updateUser= (data)=>{
    console.log('hello',data)
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.Users.findOne({where:{id : data.id},raw:false}) // trước hết cần tìm user cần edit
            if(user){
                user.email = data.email // sau đó thay thuộc tính cần thay đổi bằng data nhận được từ form
                 await user.save() // cuối cùng save vào là xong
                  resolve(
                    {
                        error:0,
                        message:'update thanh cong',
                    }
                  )
            }
            else{
                resolve({
                    error:1,
                    message:'cant find user'
                })
            }
        } catch (error) {
            reject(error)
        }
    })
}
let getOneUser = async(id)=>{
    return new Promise(async(resolve,reject)=>{
       let user =  await db.Users.findOne({where :{id:id},attributes:{exclude:['password']},})
       resolve(user)
    })
}
module.exports = {
    handleUserLogin,
    getAllUsers,
    createNewUser,
    deleteUser,
    updateUser,
}
