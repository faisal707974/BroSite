import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import connectDB from './connection/config.js'

import GeneralRouter from './routes/General.js'
import fumigationRouter from './routes/Fumigation.js'
import brocampRouter from './routes/BroCamp.js'
import advisorRouter from './routes/Advisor.js'
import managerRouter from './routes/Manager.js'

import path from 'path'

const __dirname = path.resolve()

const app = express()


const corsOptions = {
    origin: '*',
    credentials: true,            //access-control-allow-credentials:true
    optionSuccessStatus: 200,
    origin: "http://localhost:3000"
}

dotenv.config()
app.use(cors(corsOptions))
app.use(express.json({ limit: '50mb' }))
connectDB()



app.use('/', GeneralRouter)
app.use('/fumigation', fumigationRouter)
app.use('/brocamp', brocampRouter)
app.use('/advisor', advisorRouter)
app.use('/manager', managerRouter)


if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../frontend/build')))

    app.get('*', (req, res) =>
        res.sendFile(path.resolve(__dirname, '../frontend', 'build', 'index.html'))
    )
} else {
    app.get('/', (req, res) => {
        res.send('API is running....')
    })
}


app.listen(process.env.PORT, () => {
    console.log(`server started running in ${process.env.PORT}`)
}) 