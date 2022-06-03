import express from "express";
import { getStudents } from "../controllers/Advisor.js";
import { Authentication } from "../middlewares/Authentication.js";

const router = express.Router()

router.route('/students').get(Authentication, getStudents) 

export default router