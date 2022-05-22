import mongoose from "mongoose";

const batchSchema = new mongoose.Schema({
    Venue:String,
    BroCamp:String,
    Date:Date,
    Batch:Number,
    Seats:Number
})

const newBatchModel = mongoose.model('Batch',batchSchema)
export default newBatchModel