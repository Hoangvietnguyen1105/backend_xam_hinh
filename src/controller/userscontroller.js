import userService from "../services/usersService"

let createUser = async(req,res)=>{
    let data = req.query
    
     let message = await userService.createUser(data)
     console.log(message)
}
let getAllUser = async(req,res)=>{
    let message = await userService.getAllUser()
    console.log(message)
}
let updateUser = async(req,res)=>{
    console.log('controller')
    let data = req.body
    console.log(data)
    let message = await userService.updateUser(data)
}

module.exports = {
    createUser,
    getAllUser,
    updateUser
}