import express from "express";
import { getPendingTopics } from "../controllers/Advisor.js";
import { deleteLearnedToday, getAnswers, getLearnedToday, getTechTasks, saveAnswers, saveLearnedToday } from "../controllers/BroCamp.js";
import { Authentication } from "../middlewares/Authentication.js";

const router = express.Router()

router.route('/tech_tasks/:id').get(getTechTasks)
router.route('/techTasks/answers/:User/:Week')
    .get(getAnswers)
router.route('/techTasks/answers').post(saveAnswers)
router.route('/review/learnedtoday/:id?')
    .post(saveLearnedToday)
    .get(getLearnedToday)
    .delete(deleteLearnedToday)
router.route('/review/pendingtopics/:id/:week').get(getPendingTopics)


export default router  