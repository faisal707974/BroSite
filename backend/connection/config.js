import mongoose from 'mongoose'
import dotenv from 'dotenv'
dotenv.config()

const connectDatabase = async()=>{
    try{
        const connection = await mongoose.connect(process.env.mongocluster)
        console.log(`MongoDB connected : ${connection.connection.host}`)
    }catch(err){
        console.log(`MongoDB connection failed. Error: ${err}`)
    }
}

export default connectDatabase