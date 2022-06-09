import express from "express";
import { getPendingTopics, getStudents, savePendingTopic, updateWeek } from "../controllers/Advisor.js";
import { Authentication } from "../middlewares/Authentication.js";

const router = express.Router()

router.route('/students').get(Authentication, getStudents)
router.route('/students/pendingTopic')
    .post(savePendingTopic)
router.route('/students/pendingTopic/:id/:week')
    .get(getPendingTopics)
router.route('/students/changeWeek/:week/:id').put(updateWeek)

export default router