const { Sequelize } = require('sequelize');


// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize('hoc_node', 'root', '123456789', {
  host: 'localhost',
  dialect:'mysql',
  
});
async function connectDB(){ // hàm này là hàm kiểm tra kết nối xem có được ko 
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');
      } catch (error) {
        console.error('Unable to connect to the database:', error);
      }
}


module.exports = connectDB; // export ra ngoài để chạy trong hàm índex