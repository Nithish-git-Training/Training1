const sequelize = require('./config/config');

const addStatusToUsers = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.query(`
            ALTER TABLE Users
            ADD COLUMN status VARCHAR(255) NOT NULL UNIQUE
        `);

        console.log('status column added to Users table successfully.');
    } catch (error) {
        console.error('Unable to add column:', error);
    } finally {
        await sequelize.close(); 
    }
};

addStatusToUsers();
