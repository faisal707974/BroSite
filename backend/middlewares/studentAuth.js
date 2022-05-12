import registration from "../models/registration.js"

export const Auth = async (req, res, next) => {
    console.log('reached auth')
    const userExist = await registration.findOne({ Name: req.body.username })
    if (userExist) {
        const result = await userExist.matchPassword(req.body.password, userExist.password)
        if (result) {
            req.user = userExist;
            next()
        } else {
            res.json({
                code : 401,
                status : 'fail',
                message: 'incorrect password'
            })
        }
    } else {
        res.json({ 
            code : 403,
            status : 'fail',
            message: 'You have to register first' 
        })
    }
}