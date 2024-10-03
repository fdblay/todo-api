import { TodoModel } from "../models/todo.js";

export const addTodo = async (req, res, next) => {
   try {
     // validate user input
     // Write todo to database
     console.log(req.body);
     await TodoModel.create(req.body);
     // Respond to request
     res.json('Todo was added!');
   } catch (error) {
        next(error);
   }
}

export const getTodos = async (req, res, next) => {
    try {
        // Fetch todos from databse
        const todos = await TodoModel.find();
        // Return response
        res.status(200).json(todos);
    } catch (error) {
        next(error);
    }
}
 
export const updateTodo = (req, res, next) => {
    res.json('Todo updated!');
}

export const deleteTodo = (req, res, next) => {
    res.json('Todo deleted');
}