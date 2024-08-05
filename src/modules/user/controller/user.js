import { Op } from "sequelize";
import userModule from "../../../../DB/model/UserModel.js";

const getUser = async (req, res, next) => {
  try {
        const users = await userModule.findAll({
          where : {
            age :{
              [Op.lt]:45
            } , 
            userName:{
              [Op.like]:`a%`
            }
          }
        });
        return res.json({ message: "done", users });
  } catch (error) {
    return res.json({message:`catch error ${error}`})
  }
};



const updateUser = async (req,res,next) =>{
          
      try {
         const { age } = req.body;
         const { id } = req.params;
         // console.log({id,age});
         const user = await userModule.update(req.body, {
           where: {
             id,
           },
         });
         return user[0]
           ? res.json({ message: "done", user })
           : res.json({ message: "in_valid userID" });
      } catch (error) {
        res.json({ message: "catch error ",error , stack:error.stack });
      }
}


const deleteUser = async (req,res,next) => {
try {
  const { id } = req.params;
  const user = await userModule.destroy({
    where: {
      id: id,
    },
  });
  return   user?   res.json({ message: `done  delete user ID=${id}`})
               :   res.json({ message: "in_valid userID"});
} catch (error) {
  return res.json({ message: "error",error,stack:error.stack });
}
  
}

export { getUser, updateUser , deleteUser};

