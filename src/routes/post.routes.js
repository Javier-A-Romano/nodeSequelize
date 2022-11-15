import { Router } from 'express'
import { createPost, getPost, getPostID, deletePostID, updatePost } from '../controllers/post.controller.js'


const router = Router()

/**
 * @swagger
 * components:
 *  schemas:
 *    Post:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of post
 *        message:
 *          type: string
 *          description: the message of the post
 *        idpost: 
 *          type: string
 *          description: the id of the post  
 *      required:
 *        - message
 *        
 *      example:
 *        id: 1
 *        message: My first post
 *        idpost: 3  
 *        
 *    PostNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Post
 *      example:
 *        msg: Post was not found
 *
 *  parameters:
 *    PostId:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the task id
 */

/**
 * @swagger
 * tags:
 *  name: Post
 *  description: Post endpoint
 */

/**
 * @swagger
 * /post:
 *  get:
 *    summary: Returns a list of post
 *    tags: [post]
 *    responses:
 *      200:
 *        description: the list of post
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Post'
 */
router.get('/post', getPost)
router.post('/post', createPost)
router.get('/post/:id', getPostID)
router.delete('/post/:id', deletePostID)
router.put('/post/:id', updatePost)



export default router