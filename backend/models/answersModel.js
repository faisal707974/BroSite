import mongoose from "mongoose";

const answersSchema = new mongoose.Schema({
    User: mongoose.Schema.Types.ObjectId,
    Question: mongoose.Schema.Types.ObjectId,
    Week: Number,
    Answer : String
})

const answers = mongoose.model('answers',answersSchema)
export default answers