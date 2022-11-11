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

export const getPostID = async (req, res) => {
    try {
        const { id } = req.params;
        

        const PostID = await Post.findOne({
            where:{
                id:id
            }
        })
        
        if(!PostID)return res.status(404).json({message : `person with ID ${id} does not exists `})

        res.json(PostID)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deletePostID = async (req, res) => {
    try {
        const { id } = req.params;
        

        const PostID = await Post.destroy({
            where:{
                id:id
            }
        })
        
       return res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const updatePost = async (req, res) => {
    try {
        const { id } = req.params;
        

        const postUddate = await Post.findOne({
            where:{id}
        });
        postUddate.set(req.body)
        await postUddate.save()


        return res.json(postUddate)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}