import {Router} from 'express'
import { createPost,getPost,getPostID,deletePostID,updatePost } from '../controllers/post.controller.js'


const router = Router()

router.get('/post',getPost)
router.post('/post',createPost)
router.get('/post/:id',getPostID)
router.delete('/post/:id',deletePostID)
router.put('/post/:id',updatePost)



export default router