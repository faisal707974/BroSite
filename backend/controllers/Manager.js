import { response } from "express";
import newBatchModel from "../models/newBatchModel.js";
import registration from "../models/registration.js";
import TasksModel from "../models/tasksModel.js";

export const newBatch = async (req, res) => {
    const response = await newBatchModel.create(req.body)
}

export const schedules = async (req, res) => {

    const today = new Date()
    // const today = new Date(2022,4,21)
    const newDay = today.getDate() - 2
    const newDate = new Date(today.getFullYear(), today.getMonth(), newDay)

    const data = await newBatchModel.aggregate([
        {
            $match: {
                Date: { $gte: newDate }
            }
        },
        {
            $sort: {
                Date: 1
            }
        },
        {
            $project: {
                Venue: 1,
                Batch: 1,
                BroCamp: 1,
                Seats: 1,
                Date: {
                    Day: { $dayOfMonth: '$Date' },
                    Month: { $month: '$Date' },
                    Year: { $year: '$Date' },
                    Week: { $dayOfWeek: '$Date' }
                }
            }
        }
    ])
    res.send(data)
}

export const deleteSchedule = (req, res) => {
    newBatchModel.deleteOne({ _id: req.query.id }).then((response) => {
        if (response.deletedCount === 1) {
            res.status(200)
            res.send('deleted Successfully')
        }
    })
}

export const addTasks = (req, res) => {
    TasksModel.create(req.body)
}

export const getTasks = async (req, res) => {
    const response = await TasksModel.aggregate([
        {
            $sort:{
                Week : 1
            }
        },
        {
            $group: {
                _id: {
                    'domain': '$Domain',
                    'Week': '$Week'
                },
                'Questions': {
                    $push:'$Question'
                }
            }
        },
        {
            $group:{
                _id:'$_id.domain',
                data:{
                    $push:{
                        week:'$_id.Week',
                        Questions:'$Questions'
                    }
                }
            }
        }
        ,
        {
            $sort:{
                'data.week':-1
            }
        }
    ])
    // console.log(response[0])
    res.status(200)
    res.send(response)
}

export const get_participants = (req, res)=>{

    // registration.find()
    console.log(req.params)

}