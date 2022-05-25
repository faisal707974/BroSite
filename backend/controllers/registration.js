import newBatchModel from '../models/newBatchModel.js'
import registration from '../models/registration.js'

export const register = async (req, res) => {
    try {
        req.body.role = 'newRegistration'
        const response = await registration.create(req.body)
        
        res.json({
            code: 200,
            message: 'registration successful'
        })
    } catch (err) {
        res.send(err)
    }
}