import learnedToday from "../models/learnedToday.js"
import registration from "../models/registration.js"
import TasksModel from "../models/tasksModel.js"

export const getTechTasks = async (req, res)=>{
    const data = await registration.findOne({_id:req.params.id})
    const questions = await TasksModel.find({Domain:data.domain, Week:data.Week})
    res.status(200)
    res.send(questions)
} 

export const saveLearnedToday = async (req, res)=>{
    req.body.day = new Date().setHours(0,0,0,0)
    console.log(req.user)
    const response = await learnedToday.create(req.body)
    res.status(200)
}

export const getLearnedToday = async (req, res)=>{
    const response = await learnedToday.find()
    res.status(200)
    res.send(response)
}

export const deleteLearnedToday = async (req, res)=>{
    console.log('delete me')
    const response = await learnedToday.deleteOne({_id:req.params.id})
    console.log(response)
}