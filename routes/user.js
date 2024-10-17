import { Router } from "express";
import { getProfile, updateUserProfile, userLogin, userLogout, userRegister } from "../controllers/user.js";
import { userAvatarUpload } from "../middlewares/upload.js";
import { hasPermission, isAuthenticated } from "../middlewares/auth.js";

// Create router
const userRouter = Router();

// Define routes
userRouter.post('/users/register', userRegister);

userRouter.post('/users/login', userLogin);

userRouter.get('/users/me', isAuthenticated, hasPermission('get_profile'), getProfile);

userRouter.post('/users/logout', isAuthenticated, userLogout);

userRouter.patch('/users/me', isAuthenticated, hasPermission('update_profile'),  userAvatarUpload.single('avatar'), updateUserProfile);

// Export Router
export default userRouter;