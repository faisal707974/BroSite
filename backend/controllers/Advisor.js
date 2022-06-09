import pendingTopics from "../models/pendingTopics.js"
import { User } from "../models/user.js"

export const getStudents = async (req, res) => {
    const response = await User.find({ Advisor: req.user._id })
    res.status(200).send(response)
}

export const savePendingTopic = async (req, res) => {
    const response = await pendingTopics.create(req.body)
    res.status(200)
    res.send(response)
}

export const getPendingTopics = async (req, res) => {
    const response = await pendingTopics.find({ Student: req.params.id, Week: req.params.week })
    res.status(200)
    res.send(response)
}

export const updateWeek = async (req, res) => {
    const response = await User.updateOne({ _id: req.params.id }, { $set: { Week: req.params.week } })
    res.status(200)
    res.send(response)

}