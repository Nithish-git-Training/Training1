const express = require('express');

const userRoutes = require('./src/routes/user');
require('dotenv').config();

const app = express();
app.use(express.json());

app.use('/api', authRoutes);
app.use('/api/users', userRoutes);

app.listen(3000, async () => {
    try {
        await sequelize.sync();
        console.log('Server is running on http://localhost:3000');
    } catch (error) {
        console.error('Unable to connect to the database:', error);
    }
});
