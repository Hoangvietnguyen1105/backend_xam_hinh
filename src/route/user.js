import express, { response } from "express";
import homeController from "../controller/homeController"
import usersController from "../controller/userscontroller"
let router = express.Router();
router.get('/getAllUser',usersController.getAllUser)
router.get('/createuser',usersController.createUser)
router.post('/updateUser',usersController.updateUser)
module.exports=router