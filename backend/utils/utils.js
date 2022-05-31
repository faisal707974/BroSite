import { User } from "../models/user.js"

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
    const token = User.getJWTToken(user);

    const options = {
        expires: new Date(
            Date.now() + process.env.COOKIE_EXPIRE * 24 * 60 * 60 * 1000
        ),
        httpOnly: true,
    };
    res.status(statusCode).cookie("token", token, options).json({
        success: true,
        user,
        token
    })
}