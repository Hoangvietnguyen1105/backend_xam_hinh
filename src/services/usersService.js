import db from "../models/index" // tất cả các db trong mysql sẽ được export thành object db 
import bcrypt from 'bcryptjs'

const createUser = (data) => {

    return new Promise(async (resolve, reject) => {
      try {
        var salt = bcrypt.genSaltSync(10);
        var hash = bcrypt.hashSync(data.password, salt);
        await db.users.create({
          name: data.name,
          date: data.date,
          email: data.email,
          phoneNumber: data.phoneNumber,
          role: data.role,
          password: hash,
          status:'1'
        });
        console.log('User created');
        resolve('User created');
      } catch (err) {
        console.log('Error creating user: ', err);
        reject(err);
      }
    });
  };



const getAllUser = (data)=>{
    return new Promise(async(resolve,reject)=>{
       let data = await db.users.findAll()
      resolve(data)
    })
  }



const updateUser = (data)=>{
  console.log('service')
    return new Promise(async(resolve,reject)=>{
      await db.users.update({ name: data.name }, {
        where: {
          id:1
        }
      });
      resolve('done')
    })
  }
  
module.exports = {
    createUser,
    getAllUser,
    updateUser
}
