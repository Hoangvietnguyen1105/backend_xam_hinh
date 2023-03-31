import express from "express";
import homeController from "../controller/homeController"
import usersController from "../controller/userscontroller"
import user from './user'
let router = express.Router();
//thiết kế routes cho project
let initWebRoutes = (app)=>{
    router.get('/',(req,res)=>{
        return res.send("hello world") 
    })
    router.use('/user',user)
    return app.use("/",router);

}

module.exports = initWebRoutes;
