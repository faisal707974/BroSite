import { response } from 'express'
import registration from '../models/registration.js'

export const register = async(req, res) => {
    try{
        req.body.role = 'newRegistration'
        const response = await registration.create(req.body)
    }catch(err){
        res.send(err)
    }
    res.json({
        code : 200,
        message : 'registratoin successful'
    })
}