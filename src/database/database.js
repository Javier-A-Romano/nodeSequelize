import Sequelize from 'sequelize'

export const sequelize = new Sequelize('projectsdb', 'postgres', 'shorlak', {
    host: 'localhost', dialect: 'postgres'
})