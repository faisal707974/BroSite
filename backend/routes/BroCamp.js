import express from "express";
import { deleteLearnedToday, getLearnedToday, getTechTasks, saveLearnedToday } from "../controllers/BroCamp.js";
import { Authentication } from "../middlewares/Authentication.js";

const router = express.Router()

router.route('/tech_tasks/:id').get(Authentication, getTechTasks)
router.route('/review/learnedtoday/:id?')
    .post(saveLearnedToday)
    .get(getLearnedToday)
    .delete(deleteLearnedToday)


export default router