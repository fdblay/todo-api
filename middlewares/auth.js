import { expressjwt } from "express-jwt";
import { UserModel } from "../models/user.js";
import { permissions } from "../utils/rbac.js";

export const isAuthenticated = expressjwt({
    secret: process.env.JWT_PRIVATE_KEY,
    algorithms: ["HS256"]
});

export const hasPermission = (action) => {
    return async (req, res, next) => {
        try {
            // Find user from the database
            const user = await UserModel.findById(req.auth.id);

            // Use the user role to find their permission
            const permission = permissions.find(value => value.role === user.role);
            if (!permission) {
                return res.status(403).json('No permission found!')
            }
            // Check if permissin actions include action
            if (permission.actions.includes(action)) {
                next();
            } else {
                res.status(403).json('Action not allowed!');
            }
        } catch (error) {
            next(error);
        }
    }
}








// import jwt from "jsonwebtoken";

// export const isAuthenticated = (req, res, next) => {
//     try {
//         // Get authorization header
//         const authorization = req.headers.authorization;
//         // console.log(authorization);

//         // Extract token from authorization header
//         const token = authorization.split(' ')[1];

//         // Verify and decode token to get user
//         const decoded = jwt.verify(
//             token,
//             process.env.JWT_PRIVATE_KEY
//         );
//         // console.log(decoded);

//         // Attach user to reques
//         req.user = {id:decoded.id};
//         // Hand over reques to the next middleware/controller
//         next();
//     } catch (error) {
//         next(error);
//     }
// }