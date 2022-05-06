import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './connection/config.js'

import registrationRouter from './routes/Registration.js'
import fumigationRouter from './routes/Fumigation.js'

const app = express()


dotenv.config()
app.use(cors())
app.use(express.json())
connectDB()

app.get('/hello',(req,res)=>{
    res.send('welcome')
})

app.use('/registration',registrationRouter)
app.use('/fumigation',fumigationRouter)

app.listen(process.env.PORT,()=>{
    console.log(`server started running in ${process.env.PORT}`) 
}) 