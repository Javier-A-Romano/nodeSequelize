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
 *    Idpost:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the post id
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
 *    tags: [Post]
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

/**
 * @swagger
 * /post:
 *  post:
 *    summary: create a new post
 *    tags: [Post]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: the post was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      500:
 *        description: Some server error
 *
 */
router.post('/post', createPost)
/**
 * @swagger
 * /post/{id}:
 *  get:
 *    summary: create a new post
 *    tags: [Post]
 *    parameters:
 *      - $ref: '#/components/parameters/Idpost'
 *    responses:
 *      200:
 *        description: the post was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: Some server error
 *
 */
router.get('/post/:id', getPostID)
/**
 * @swagger
 * /post/{id}:
 *  delete:
 *    summary: delete a post
 *    tags: [Post]
 *    parameters:
 *      - $ref: '#/components/parameters/Idpost'
 *    responses:
 *      204:
 *        description: the post was deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: Some server error
 *
 */
router.delete('/post/:id', deletePostID)
/**
 * @swagger
 * /post/{id}:
 *  put:
 *    summary: update a post by id
 *    tags: [Post]
 *    parameters:
 *      - $ref: '#/components/parameters/Idpost'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Post'
 *    responses:
 *      200:
 *        description: the post was updated 
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: Some server error
 *
 */
router.put('/post/:id', updatePost)



export default router