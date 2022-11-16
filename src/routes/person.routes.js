import {Router} from 'express'
import { getPerson,createPerson, updatePerson, deletePerson ,getPersonID,getPersonPost} from '../controllers/person.controller.js'


const router = Router()
/**
 * @swagger
 * components:
 *  schemas:
 *    Person:
 *      type: object
 *      properties:
 *        id:
 *          type: string
 *          description: the auto-generated id of person
 *        name:
 *          type: string
 *          description: the name of the person
 *      required:
 *        - name
 *        
 *      example:
 *        id: 1
 *        name: javier 
 *        
 *    PersonNotFound:
 *      type: object
 *      properties:
 *        msg:
 *          type: string
 *          description: A message for the not found Post
 *      example:
 *        msg: Post was not found
 *
 *  parameters:
 *    Idperson:
 *      in: path
 *      name: id
 *      required: true
 *      schema:
 *        type: string
 *      description: the post id
 */
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
 */

/**
 * @swagger
 * tags:
 *  name: Person
 *  description: Person endpoint
 */

/**
 * @swagger
 * /person:
 *  get:
 *    summary: Returns a list of person
 *    tags: [Person]
 *    responses:
 *      200:
 *        description: the list of person
 *        content:
 *          application/json:
 *            schema:
 *              type: array
 *              items:
 *                $ref: '#/components/schemas/Person'
 */

router.get('/person',getPerson)
/**
 * @swagger
 * /person/{id}:
 *  get:
 *    summary: create a new person
 *    tags: [Person]
 *    parameters:
 *      - $ref: '#/components/parameters/Idperson'
 *    responses:
 *      200:
 *        description: the person was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: Some server error
 *
 */

router.get('/person/:id',getPersonID)
/**
 * @swagger
 * /person:
 *  post:
 *    summary: create a new person
 *    tags: [Person]
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Person'
 *    responses:
 *      200:
 *        description: the person was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      500:
 *        description: Some server error
 *
 */
router.post('/person',createPerson)
/**
 * @swagger
 * /person/{id}:
 *  put:
 *    summary: update a person by id
 *    tags: [Person]
 *    parameters:
 *      - $ref: '#/components/parameters/Idperson'
 *    requestBody:
 *      required: true
 *      content:
 *        application/json:
 *          schema:
 *            $ref: '#/components/schemas/Person'
 *    responses:
 *      200:
 *        description: the person was updated 
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Person'
 *      404:
 *        description: Some server error
 *
 */
router.put('/person/:id',updatePerson)
/**
 * @swagger
 * /person/{id}:
 *  delete:
 *    summary: delete a person
 *    tags: [Person]
 *    parameters:
 *      - $ref: '#/components/parameters/Idperson'
 *    responses:
 *      204:
 *        description: the person was deleted
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Person'
 *      404:
 *        description: Some server error
 *
 */
router.delete('/person/:id',deletePerson)
/**
 * @swagger
 * /person/{id}/post:
 *  get:
 *    summary: create a new person
 *    tags: [Person]
 *    parameters:
 *      - $ref: '#/components/parameters/Idperson'
 *    responses:
 *      200:
 *        description: the person was successfully created
 *        content:
 *          application/json:
 *            schema:
 *              $ref: '#/components/schemas/Post'
 *      404:
 *        description: Some server error
 *
 */
router.get('/person/:id/post',getPersonPost)


export default router