import { sequelize } from "../connection.js";
import {DataTypes } from "sequelize";



const userModule = sequelize.define("User", {
  id: {
    type:DataTypes.INTEGER,
    autoIncrement:true,
    allowNull:false,
    unique:true,
    primaryKey:true
  },
  userName: {
    type:DataTypes.STRING,
    allowNull:false
  },
  email: {
    type:DataTypes.STRING(150),
    allowNull:false,
    unique:true
  },
  password: {
    type:DataTypes.STRING,
    allowNull:false
  },
  age: {type:DataTypes.INTEGER},
  salary: {type:DataTypes.FLOAT},
});




export default userModule