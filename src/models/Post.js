import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'

export const Post = sequelize.define("posts", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,

    },
    message: {
        type: DataTypes.STRING,
    },
    likes:
    {
        type: DataTypes.INTEGER
    }

})