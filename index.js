// bringing in codes
import express from 'express';
import mongoose from 'mongoose';
import todoRouter from './routes/todo.js';
import userRouter from './routes/user.js';

// connect to database
await mongoose.connect('mongodb+srv://todo-api:todo-api@cluster0.q3qas.mongodb.net/todo-db?retryWrites=true&w=majority&appName=Cluster0');

// create an express app
const app = express();

//  Use routes
app.use(todoRouter);
app.use(userRouter);

//  Listen for incoming requests
app.listen(3000, () => {
    console.log('App is listening on port 3000')
});