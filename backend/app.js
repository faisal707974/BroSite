import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './connection/config.js'

import GeneralRouter from './routes/General.js'
import fumigationRouter from './routes/Fumigation.js'
import managerRouter from './routes/Manager.js'

const app = express()


dotenv.config()
app.use(cors())
app.use(express.json())
connectDB()



app.use('/',GeneralRouter)
app.use('/fumigation',fumigationRouter)
app.use('/manager',managerRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server started running in ${process.env.PORT}`) 
}) 