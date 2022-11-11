import { Post } from '../models/Post.js'

export const createPost = async (req, res) => {
    try {
        const { message , idpost } = req.body

        const newPost = await Post.create({
            message,
            idpost
        })

        res.json(newPost)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getPost = async (req, res) => {
    try {
        const allPost = await Post.findAll()

        res.json(allPost)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}