import bcrypt from 'bcryptjs'
import db from "../models/index" // tất cả các db trong mysql sẽ được export thành object db 

const salt = bcrypt.genSaltSync(10);
let createNewUser =async(data)=>{
    
    return new Promise(async(resolve,reject)=>{
        try {
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
            resolve('success')
        } catch (error) {
            reject(error)
        }
    })
}

//su dung voi async va await
// let hashUserPassword = async(pass)=>{
//     try {
//         let hashPassword = await bcrypt.hashSync(pass, salt);
//         return hashPassâsdasdword
//     } catch (error) {
//         console.log(error)
//     }
// }
let getAllUsers = ()=>{
    return new Promise(async(resolve,reject)=>{
        
        try {
            let data = await db.Users.findAll({
                raw :true,
            });
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
}
 let getUsersById = (id)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let data = await db.Users.findOne({ where: { id: id } ,raw:true});
            resolve(data)
        } catch (error) {
            reject(error)
        }
    })
 }
 let updateUsersData = (data)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.Users.findOne({where:{id : data.id},raw:false}) // trước hết cần tìm user cần edit
            if(user){
                user.email = data.email // sau đó thay thuộc tính cần thay đổi bằng data nhận được từ form
                 await user.save() // cuối cùng save vào là xong
                  resolve()
            }
            else{
                resolve()
            }
        } catch (error) {
            reject(error)
        }
    })
 }
 let deleteUsersById = (id)=>{
    return new Promise(async(resolve,reject)=>{
        try {
            let user = await db.Users.findOne({where:{id:id}})
             if(user){
                await user.destroy();
             }
             resolve()
        } catch (error) {
            reject(error)
        }
    })
    
 }
module.exports = {
    createNewUser : createNewUser,
    getAllUsers,
    getUsersById,
    updateUsersData,
    deleteUsersById,
}