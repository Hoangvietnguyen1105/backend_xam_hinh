import express from "express";
import homeController from "../controller/homeController"
import usersController from "../controller/userscontroller"
let router = express.Router();
//thiết kế routes cho project
let initWebRoutes = (app)=>{
    router.get('/',(req,res)=>{
        return res.send("hello world") 
    })
    router.get('/hoangviet',homeController.getHomePage)
    // router.get('/test',homeController.test)
    router.get('/crud',homeController.getCRUD)
    router.post('/post-crud',homeController.postCRUD)
    router.get('/displayCRUD',homeController.displayGetCRUD)
    router.get('/edit-crud',homeController.getEditCRUD)
    router.post('/put-crud',homeController.putCRUD)
    router.get('/delete-crud',homeController.deleteCRUD)
    router.post('/api/login',usersController.handleLogin)
    router.get('/api/get-all-users',usersController.handleGetAllUsers)
    router.post('/api/create-new-user',usersController.handleCreateNewUser1)
    router.delete('/api/delete-user',usersController.deleteUser)
    router.post('/api/update-user',usersController.updateUser)

    return app.use("/",router);

}

module.exports = initWebRoutes;
