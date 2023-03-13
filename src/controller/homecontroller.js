import db from "../models/index" // tất cả các db trong mysql sẽ được export thành object db 
import CRUDservices from "../services/CRUDservices";
let getHomePage = async(req,res)=>{
    try {
        
        let data = await db.Users.findAll(); // gọi đới dbUser và dùng hàm findAll() 
        
         return res.render('homepage.ejs',{
            data: JSON.stringify(data) 
         }) ;
    } catch (error) {
        console.log(error)
    }
    
}

// let test =(req,res)=>{
//     return res.render('homepage.ejs') // render ra trang homepage.ejs trong views , do đã config nên chỉ cần ghi tên
// }

let getCRUD = (req,res)=>{
    return res.render('crud.ejs')
}
let postCRUD = async (req,res)=>{
   //console.log(req.body);
   let message = await CRUDservices.createNewUser(req.body)
   return res.send(message)
}
let displayGetCRUD = async(req,res)=>{
    
    let data = await CRUDservices.getAllUsers()
    console.log(data)
    return res.render('displayCRUD.ejs',{
        data 
     })
}
let getEditCRUD  = async(req,res)=>{
    let id = req.query.id // câu lệnh của express để lấy dữ liệu truyền qua link ở trang edit-crud.ejs 
    console.log(id)
    let data = await CRUDservices.getUsersById(id)
    console.log(data)
    return res.render('edit-crud.ejs',{data})
}
let putCRUD =async (req,res)=>{
    let data = req.body; // lấy data từ form
    await CRUDservices.updateUsersData(data) // gửi data đến function ở crudservice
    return res.send('done')
}
let deleteCRUD = async(req,res)=>{
    let id = req.query.id
    await CRUDservices.deleteUsersById(id)
    res.send("delete success")
}
module.exports = {
    getHomePage:getHomePage,
    getCRUD:getCRUD,
    postCRUD:postCRUD,
    displayGetCRUD,
    getEditCRUD,
    putCRUD,
    deleteCRUD,
}