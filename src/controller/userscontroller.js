import userService from "../services/usersService"
let handleLogin = async (req,res)=>{
    let email = req.body.email
    let password = req.body.password
    if(!email || !password){
        return res.status(500).json({
            error:1,
            message:'khong nhap du cac truong',
        })
    }
    let user = await userService.handleUserLogin(email,password)
    return res.status(200).json({
        error:user.error,
        message:user.message,
        user:user.user ? user.user : {},
    })

}
let handleGetAllUsers = async(req,res)=>{
    let id = req.query.type //lấy id nhận được từ api
    console.log(id)
    if(!id){ //nếu không có id được gửi sẽ vào case này
        return res.status(200).json({
            errorCode:0,
            errorMessage:'chua truyen id',
            users
        })
    }
    let users = await userService.getAllUsers(id); // gọi hàm getAllUsers để lấy trong db
    console.log(users)
    return res.status(200).json({ // gửi cho api
        errorCode:0,
        errorMessage:'ok',
        users
    })
}
let handleCreateNewUser = async(req,res)=>{
    let message = await userService.createNewUser(req.body);

    
     return res.status(200).json({
        message
     })
}
let deleteUser = async(req,res)=>{
    let id = req.query.id
    console.log(id)
    let message = await userService.deleteUser(id)
    
    return res.status(200).json({
        message
    })
}

let updateUser = async(req,res)=>{
   
    let message = await userService.updateUser(req.body)
    return res.status(200).json({
        message
     })
}
let handleCreateNewUser1 = async(req,res)=>{
    let message = await userService.createNewUser(req.body);

    
     return res.status(200).json({
        message
     })
}

module.exports = {
    handleLogin,
    handleGetAllUsers,
    handleCreateNewUser,
    deleteUser,
    updateUser,
    handleCreateNewUser1
}