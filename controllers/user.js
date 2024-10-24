import { UserModel } from "../models/user.js";
import { registerUserValidator, loginUserValidator, updateProfileValidator } from "../validators/user.js";
import bcryptjs from "bcryptjs";
import jwt from "jsonwebtoken";

// Register ('user registered')
// Login ('user logged in')
// Logout ('user logged out')


export const userRegister = async (req, res, next) => {
    try {
        // validate user input
        const { error, value } = registerUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        // Check if user does not exist
        const user = await UserModel.findOne({ email: value.email });
        if (user) {
            return res.status(409).json('User already exist!')
        }

        // Hash their password
        const hashedPassword = bcryptjs.hashSync(value.password, 10);

        // Save user into database
        await UserModel.create({
            ...value,
            password: hashedPassword
        });
        // Send user confirmation email
        // Respond to request
        res.json('User Registered!');
    } catch (error) {
        next(error);
    }
}

export const userLogin = async (req, res, next) => {
    try {
        // Validate user input
        const { error, value } = loginUserValidator.validate(req.body);
        if (error) {
            return res.status(422).json(error);
        }

        // Find one user with identifier
        const user = await UserModel.findOne({ email: value.email });
        if (!user) {
            return res.status(404).json('User does not exist!');
        }

        // Compare their passwords
        const correctPassword = bcryptjs.compareSync(value.password, user.password);
        if (!correctPassword) {
            return res.status(401).json('Invalid credentials!')
        }
        // Sign a token for user
        const token = jwt.sign(
            { id: user.id },
            process.env.JWT_PRIVATE_KEY,
            { expiresIn: '24h' }
        );
        // Respond to request
        res.json({
            message: 'User Logged in!',
            accessToken: token
        });
    } catch (error) {
        next(error);
    }
}

export const getProfile = async (req, res, next) => {
    try {
        // Find authenticated user from the database
        const user = await UserModel
        .findById(req.auth.id)
        .select({password: false});
        // Respond to request
        res.json(user);
    } catch (error) {
        next(error);
    }
}

export const userLogout = (req, res, next) => {
    try {
        
    } catch (error) {
        next(error);
    }
    res.json('user Logged out');
}

export const updateUserProfile = (req, res, next) => {
    try {
        // validate user input
        const {} = updateProfileValidator.validate(req.body);
        res.json('User profile updated');
    
    } catch (error) {
        next(error)
    }}