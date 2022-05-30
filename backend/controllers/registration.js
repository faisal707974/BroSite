import newBatchModel from '../models/newBatchModel.js'
import registration from '../models/registration.js'

export const register = async (req, res) => {
    try {
        req.body.role = 'newRegistration'
        let d = req.body.Batch
        let newDa = 19800000 + Date.parse(d)
        let finalDate = new Date(newDa)

        const batch = await newBatchModel.findOne({BroCamp:req.body.BroCamp, Date:finalDate})
        req.body.Batch = batch._id

        const response = await registration.create(req.body)
        
        res.json({
            code: 200,
            message: 'registration successful',
            data : response
        })
    } catch (err) { 
        res.send(err)
    }
}