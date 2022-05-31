import mongoose from "mongoose";

const learnedTodaySchema = new mongoose.Schema({
    user:{
        type:mongoose.Schema.ObjectId,
        ref:'users'
    },
    topic: String,
    week: Number,
    day: Date

})
const learnedToday = mongoose.model('learnedToday', learnedTodaySchema)
export default learnedToday