import mongoose from "mongoose";

const tasksSchema = new mongoose.Schema({
    Domain : String,
    Week : Number,
    Question : String
})

const TasksModel = mongoose.model('Tasks',tasksSchema)
export default TasksModel