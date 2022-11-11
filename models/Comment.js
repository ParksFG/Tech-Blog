const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class Comment extends Model {}

Comment.init(
    {
        id: {
            type: DataTypes.INTEGER,
            allowNull: false,
            primaryKey: true,
            autoIncrement: true
        },
        content: {
            type: DataTypes.STRING,
            allowNull: false
        },
        date: {
            type: DataTypes.DATEONLY,
            allowNull: false,
            defaultValue: DataTypes.NOW
        },
        userID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'user',
                key: 'id'
            }
        },
        postID: {
            type: DataTypes.INTEGER,
            references: {
                model: 'post',
                key: 'id'
            },
        },
    }, {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        modelName: 'comment'
    }
);

module.exports = Comment