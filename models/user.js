import { Schema, model } from "mongoose";
import { toJSON } from "@reis/mongoose-to-json";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true},
    avatar: {type: String},
    role: {type: String, 
        default: 'user', 
        enum: ['user', 'vendor', 'admin', 'superadmin']
    }
}, {
    timestamps: true
});

// const bookSchema = new Schema({
//     title: {type: String, required: true},
//     summary: {type: String, required: true},
//     author: {},
//     cover: {type: String, required: true}, //reference the image link
// });

userSchema.plugin(toJSON);

export const UserModel = model('User', userSchema);