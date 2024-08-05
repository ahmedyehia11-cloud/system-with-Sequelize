import userModule from "../../../../DB/model/UserModel.js";


const signUp = async (req,res,next) =>
{
 try {
   const { userName, email, password } = req.body;
   //   console.log({ userName, email, password });
   const addUser = await userModule.create(req.body,{fields:['userName','email','password','age']});
   return res.json({ message: "done", addUser });
 } catch (error) {
    if (error.parent?.errno==1062) {
        return res.json({ message: "email already exits"});  
    }
    return res.json({ message: `catch error`,error , stack:error.stack});  
 }

}


const login = async (req,res,next)=>{
    const {email,password} = req.body
    console.log({email,password});
    const checkUser = await userModule.findAll({
        attributes:['userName','id'],
        where:{
            email,
            password
        }
    })
              return checkUser.length
                ? res.json({ message: "done", checkUser })
                : res.json({ message: "in_valid email or password"}); 
}

export {signUp , login}