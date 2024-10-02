import { Router } from "express";
import { userLogin, userLogout, userRegister } from "../controllers/user.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post('/users/register', userRegister);

userRouter.post('/users/login', userLogin);

userRouter.post('/users/logout', userLogout);

// Export Router
export default userRouter;