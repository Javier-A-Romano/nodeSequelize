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