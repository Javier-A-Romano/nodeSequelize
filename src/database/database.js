import Sequelize from 'sequelize'
const dotenv = require('dotenv');

/*export const sequelize = new Sequelize('projectsdb', 'postgres', 'shorlak', {
    host: 'localhost', dialect: 'postgres'
})*/

dotenv.config();

const {
  DB_NAME,
  DB_PASSWORD,
  DB_USER,
  DB_URI
} = process.env

export const sequelize = new Sequelize(DB_URI, {
    define: {
      timestamps: false
    }
  });