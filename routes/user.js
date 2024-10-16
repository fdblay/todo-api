import { Router } from "express";
import { getProfile, updateUserProfile, userLogin, userLogout, userRegister } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post('/users/register', userRegister);

userRouter.post('/users/login', userLogin);

userRouter.get('/users/me', getProfile);

userRouter.post('/users/logout', userLogout);

userRouter.post('/users/me', userAvatarUpload.single('avatar'), updateUserProfile);

// Export Router
export default userRouter;