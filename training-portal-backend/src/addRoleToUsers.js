const sequelize = require('./config/config');

const addRoleToUsers = async () => {
    try {
        await sequelize.authenticate();
        console.log('Connection has been established successfully.');

        await sequelize.query(`
            ALTER TABLE Users
            ADD COLUMN role VARCHAR(255) NOT NULL DEFAULT 'user'
        `);

        console.log('Role column added to Users table successfully.');
    } catch (error) {
        console.error('Unable to add column:', error);
    } finally {
        await sequelize.close(); 
    }
};

addRoleToUsers();

//to add more col