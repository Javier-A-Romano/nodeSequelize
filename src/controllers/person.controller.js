import { Person } from '../models/Person.js'

export const getPerson = async (req, res) => {
    try {
        const allPerson = await Person.findAll()

        res.json(allPerson)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }

}
export const createPerson = async (req, res) => {
    try {
        const { name } = req.body

        const newPerson = await Person.create({
            name
        })

        res.json(newPerson)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}
export const updatePerson = async (req, res) => {
    try {
        const { id } = req.params;
        const {name} =req.body;

        const personUddate = await Person.findByPk(id)
        personUddate.name=name
        await personUddate.save()

        res.json(personUddate)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const deletePerson = async (req, res) => {
    try {
        const { id } = req.params

        await Person.destroy({
            where: {
                id,
            }
        })

        res.sendStatus(204)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}

export const getPersonID = async (req, res) => {
    try {
        const { id } = req.params;
        

        const personID = await Person.findOne({
            where:{
                id:id
            }
        })
        
        if(!personID)return res.status(404).json({message : `person with ID ${id} does not exists `})

        res.json(personID)
    } catch (error) {
        return res.status(500).json({
            message: error.message
        })
    }
}