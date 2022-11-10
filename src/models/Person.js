import { DataTypes } from 'sequelize'
import { sequelize } from '../database/database.js'
import { Post } from './Post.js';

export const Person = sequelize.define("persons", {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        
    },
    name: {
        type: DataTypes.STRING,
    }

});
Person.hasMany(Post, {
    foreignKey:'idpost',
    sourceKey:'id'
});
Post.belongsTo(Person, {
    foreignKey: 'idpost',
    targetId: 'id'
});