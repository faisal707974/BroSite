import answers from "../models/answersModel.js"
import learnedToday from "../models/learnedToday.js"
import pendingTopics from "../models/pendingTopics.js"
import registration from "../models/registration.js"
import TasksModel from "../models/tasksModel.js"
import { User } from "../models/user.js"

export const getTechTasks = async (req, res) => {
    if (req.params.id === 'undefined') {
        console.log('req.params.id is undefined')
    } else {
        const data = await User.findOne({ _id: req.params.id })
        const questions = await TasksModel.find({ Domain: data.Domain, Week: data.Week })
        res.status(200)
        res.send(questions)
    }
}

export const saveLearnedToday = async (req, res) => {
    req.body.day = new Date().setHours(0, 0, 0, 0)
    const response = await learnedToday.create(req.body)
    res.status(200)
}

export const getLearnedToday = async (req, res) => {
    const response = await learnedToday.find()
    res.status(200)
    res.send(response)
}

export const deleteLearnedToday = async (req, res) => {
    const response = await learnedToday.deleteOne({ _id: req.params.id })
    console.log(response)
}

export const saveAnswers = async (req, res) => {
    const response = await answers.findOneAndUpdate({ User: req.body.User, Week: req.body.Week, Question: req.body.Question }, req.body, { upsert: true })
    console.log(response)
}

export const getAnswers = async (req, res) => {
    if (req.params.User === 'undefined') {
        console.log('user undefined')
    } else {
        const response = await answers.find({ User: req.params.User, Week: req.params.Week })
        res.status(200)
        res.send(response)
    }
}

// export const getPendingTopics = ()=>{
//     const response = await pendingTopics.find()
// }