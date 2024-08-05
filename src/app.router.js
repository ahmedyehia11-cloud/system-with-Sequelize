import authRouter from "./modules/auth/auth.router.js"
import userRouter from "./modules/user/user.router.js";
import productRouter from "./modules/product/product.router.js";
import { connectDB } from "../DB/connection.js";


const initApp = (express , app) =>{
// convert buffer data 
app.use(express.json({}))

// connect DB
connectDB()


// application routing
app.get("/", (req, res) => res.send("Hello World!"));
app.use('/auth',authRouter)
app.use("/user", userRouter);
app.use("/product", productRouter);


}


export default initApp