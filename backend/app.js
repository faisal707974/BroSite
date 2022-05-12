import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './connection/config.js'

import fumigationRouter from './routes/Fumigation.js'
import GeneralRouter from './routes/General.js'

const app = express()


dotenv.config()
app.use(cors())
app.use(express.json())
connectDB()



app.use('/fumigation',fumigationRouter)
app.use('/',GeneralRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server started running in ${process.env.PORT}`) 
}) 