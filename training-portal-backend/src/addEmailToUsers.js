const sequelize = require('./config/config');

const addEmailToUsers = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.query(`
            ALTER TABLE Users
            ADD COLUMN email VARCHAR(255) NOT NULL UNIQUE
        `);

        console.log('Email column added to Users table successfully.');
    } catch (error) {
        console.error('Unable to add column:', error);
    } finally {
        await sequelize.close(); 
    }
};

addEmailToUsers();
