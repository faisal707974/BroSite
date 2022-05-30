import registration from "../models/registration.js"

export const login = async (req, res) => {
    res.json({
        code : 200,
        userInfo : req.user
    })
}