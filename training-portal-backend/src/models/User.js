const { DataTypes } = require('sequelize');
const sequelize = require('../config/config');
const { status } = require('init');

const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    email: { 
        type: DataTypes.STRING,
        allowNull: false,
        unique: true,
        validate: {
            isEmail: true,  
        },
    },
    role: { 
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: 'user' 
    },
    status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue:'active',

    }
});

module.exports = User;
// db creating sequelize