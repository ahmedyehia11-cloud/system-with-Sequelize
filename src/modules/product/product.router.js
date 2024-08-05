import { Router } from "express";
import { productModule } from "./controller/product.js";
const router = Router();

router.get("/get", productModule);

export default router;
