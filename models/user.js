import { Schema, model } from "mongoose";

const userSchema = new Schema({
    name: {type: String, required: true},
    email: {type: String, required: true},
    password: {type: String, required: true}
});

// const bookSchema = new Schema({
//     title: {type: String, required: true},
//     summary: {type: String, required: true},
//     author: {},
//     cover: {type: String, required: true}, //reference the image link
// });