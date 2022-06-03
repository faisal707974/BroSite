import registration from "../models/registration.js"
import { User } from "../models/user.js"
import bcrypt from "bcryptjs"
import { sendToken } from "../utils/utils.js"

export const login = async (req, res) => {
    console.log(req.body)
    let userExist;
    userExist = await User.findOne({ Name: req.body.username })
    if (!userExist) {
        userExist = await registration.findOne({ Name: req.body.username })
    }

    if (userExist) {
        const result = await bcrypt.compare(req.body.password, userExist.Password)
        if (result) {
            sendToken(userExist, 200, res)
        } else {
            res.status(401).json({ message: 'incorrect password' })
        }
    } else {
        res.status(403).json({ message: 'You have to register first' })
    }
}

export const loginedUser = async (req, res) => {
    let userExist;
    userExist = await User.findOne({ _id: req.params.id })
    if (!userExist) {
        userExist = await registration.findOne({ _id: req.params.id })
    }
    res.json({userInfo : userExist})
}