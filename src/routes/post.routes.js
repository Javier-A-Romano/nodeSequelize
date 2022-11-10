import {Router} from 'express'
import { getPerson,createPerson } from '../controllers/post.controller.js'


const router = Router()

router.get('/person',getPerson)
router.post('/person',createPerson)


export default router