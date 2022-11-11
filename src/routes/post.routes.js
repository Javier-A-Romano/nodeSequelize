import {Router} from 'express'
import { createPost,getPost } from '../controllers/post.controller.js'


const router = Router()

router.get('/post',getPost)
router.post('/post',createPost)



export default router