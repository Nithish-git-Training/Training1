
const { Sequelize } = require('sequelize');

const sequelize = new Sequelize('fakedb', 'root', 'passd', {
    host: 'localhost',
    dialect: 'mysql',
});


module.exports = sequelize;
