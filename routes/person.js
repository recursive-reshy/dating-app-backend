import express from 'express'

const router = express.Router()

import { getAllPeople, createPerson } from '../controllers/person.js'

router.route('/').get(getAllPeople).post(createPerson)

export default router