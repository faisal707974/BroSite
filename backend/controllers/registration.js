import newBatchModel from '../models/newBatchModel.js'
import registration from '../models/registration.js'
import cloudinary from 'cloudinary'

export const register = async (req, res) => {

    cloudinary.config({
        cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
        api_key: process.env.CLOUDINARY_API_KEY,
        api_secret: process.env.CLOUDINARY_API_SECRET,
    })

    try {
        const oout = await cloudinary.v2.uploader.upload(req.body.Photo, { folder: 'brosite' })
        req.body.Photo = {
            url: oout.secure_url,
            id: oout.public_id
        }

        req.body.Role = 'NEWREGISTRATION'
        let d = req.body.Batch
        let newDa = 19800000 + Date.parse(d)
        let finalDate = new Date(newDa)

        const batch = await newBatchModel.findOne({ BroCamp: req.body.BroCamp, Date: finalDate })
        req.body.Batch = batch._id

        const response = await registration.create(req.body)

        res.json({
            code: 200,
            message: 'registration successful',
            data: response
        })
    } catch (err) {
        console.log(err)
        res.send(err)
    }
}