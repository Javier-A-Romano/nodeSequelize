import {Router} from 'express'
import { getPerson,createPerson, updatePerson, deletePerson ,getPersonID,getPersonPost} from '../controllers/person.controller.js'


const router = Router()

router.get('/person',getPerson)
router.get('/person/:id',getPersonID)
router.post('/person',createPerson)
router.put('/person/:id',updatePerson)
router.delete('/person/:id',deletePerson)
router.get('/person/:id/post',getPersonPost)


export default router