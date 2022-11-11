import {Router} from 'express'
import { getPerson,createPerson, updatePerson, deletePerson } from '../controllers/post.controller.js'


const router = Router()

router.get('/person',getPerson)
router.post('/person',createPerson)
router.put('/person/:id',updatePerson)
router.delete('/person/:id',deletePerson)


export default router