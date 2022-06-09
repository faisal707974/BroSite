import mongoose from "mongoose";

const pendingTopicsSchema = new mongoose.Schema({
    Student: mongoose.Schema.Types.ObjectId,
    Advisor: mongoose.Schema.Types.ObjectId,
    Week: Number,
    Topic: String
})

const pendingTopics = mongoose.model('PendingTopics', pendingTopicsSchema)
export default pendingTopics