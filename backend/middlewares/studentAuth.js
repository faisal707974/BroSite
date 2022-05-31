import registration from "../models/registration.js"
import { sendToken } from '../utils/utils.js'
import { User } from "../models/user.js"

export const Auth = async (req, res, next) => {

    // const userExist = await User.findOne({ Name: req.body.username })
    // if (!userExist) {
    const userExist = await registration.findOne({ Name: req.body.username })
    // }
    if (userExist) {
        const result = await userExist.matchPassword(req.body.password, userExist.password)
        if (result) {
            req.user = userExist;
            // sendToken(userExist,200,res)
            next()
        } else {
            res.json({
                code: 401,
                status: 'fail',
                message: 'incorrect password'
            })
        }
    } else {
        res.json({
            code: 403,
            status: 'fail',
            message: 'You have to register first'
        })
    }
}