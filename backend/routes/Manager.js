import express from "express";
import { addTasks, deleteSchedule, getTasks, newBatch, schedules } from "../controllers/Manager.js";

const router = express.Router()

router.route('/newBatch').post(newBatch)
router.route('/schedules').get(schedules)
router.route('/delete_schedules').post(deleteSchedule)
router.route('/tasks')
    .post(addTasks)
    .get(getTasks)

export default router