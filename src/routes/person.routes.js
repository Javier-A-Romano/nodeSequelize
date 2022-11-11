import {Router} from 'express'
import { getPerson,createPerson, updatePerson, deletePerson ,getPersonID} from '../controllers/person.controller.js'


const router = Router()

router.get('/person',getPerson)
router.get('/person/:id',getPersonID)
router.post('/person',createPerson)
router.put('/person/:id',updatePerson)
router.delete('/person/:id',deletePerson)


export default router