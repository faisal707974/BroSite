import express from "express";
import { addTasks, deleteSchedule, getTasks, get_participants, newBatch, schedules } from "../controllers/Manager.js";

const router = express.Router()

router.route('/newBatch').post(newBatch)
router.route('/schedules').get(schedules)
router.route('/delete_schedules').post(deleteSchedule)
router.route('/tasks')
    .post(addTasks)  
    .get(getTasks)
router.route('/participants/:id').get(get_participants)

export default router 