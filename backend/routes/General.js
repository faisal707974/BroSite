import express from 'express'
import {register} from '../controllers/registration.js'
import {login} from '../controllers/login.js'
import { Auth } from '../middlewares/studentAuth.js'

const router = express.Router()

router.route('/registration').post(register)
router.route('/login').post(Auth, login)

export default router