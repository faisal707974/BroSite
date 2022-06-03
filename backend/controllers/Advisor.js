import { User } from "../models/user.js"

export const getStudents = async (req, res) => {
    const response = await User.find({ Advisor: req.user._id })
    console.log(response)
    res.status(200).send(response)
}