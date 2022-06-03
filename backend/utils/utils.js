import { User } from "../models/user.js"
import jwt from 'jsonwebtoken'

export const getStringDate = (date) => {
    if (typeof date === String) {
        const arr = date.split('-')
        const newDate = new Date(arr[0], arr[1] - 1, arr[2])
        return newDate.toDateString()
    } else if (typeof date === 'object') {
        return date.toDateString()
    }
}

export const sendToken = (user, statusCode, res) => {
    const token = jwt.sign(user.toJSON(), process.env.JWT_SECRET)

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: false
    };
    res.status(200).cookie("token", token, options).json({ userInfo: user })
}