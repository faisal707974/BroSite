import express from 'express'
import {register} from '../controllers/registration.js'
import {login, loginedUser} from '../controllers/login.js'

const router = express.Router()

router.route('/registration').post(register)
router.route('/login').post(login)
router.route('/loginedUser/:id').get(loginedUser)

export default router