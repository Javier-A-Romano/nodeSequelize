import {Person} from '../models/Person.js'

export const getPerson = async (req,res)=>{
    try{const allPerson= await Person.findAll()

    res.json(allPerson)}catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
    
}
export const createPerson = async (req,res)=>{
    try{const {name } = req.body

    const newPerson = await Person.create({
        name
    })
    
    res.json(newPerson)}catch(error){
        return res.status(500).json({
            message: error.message
        })
    }
}