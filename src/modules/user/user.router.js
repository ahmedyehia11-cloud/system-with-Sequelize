import { Router } from "express";
import { deleteUser, getUser, updateUser } from "./controller/user.js";
const router = Router();

router.get("/get", getUser);
router.patch('/update/:id',updateUser)
router.delete('/delete/:id',deleteUser)

export default router;
