
const express = require('express');
const sequelize = require('./database');
const User = require('./User');

const app = express();
const PORT = process.env.PORT || 4000;

app.use(express.json());


const syncDatabase = async () => {
    try {
        await sequelize.sync();
        console.log('Database & tables created!');
    } catch (error) {
        console.error('Error syncing database:', error);
    }
};


syncDatabase();
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});

