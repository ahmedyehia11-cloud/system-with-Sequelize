import { Sequelize } from "sequelize";

const sequelize = new Sequelize("sequelizeTest", "root", "", {
  host: "localhost",
  dialect: "mysql",
});

const connectDB = async ()=>{

    return await  sequelize.sync({alter:false}).then(result=>{
        console.log('connected DB');
    //    console.log(result);
    }).catch(err=>{console.log(`fail to connect DB.....${err}`);})
}

export {sequelize,connectDB}