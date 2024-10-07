const express = require('express');
const sequelize = require('./config/config');
const authRoutes = require('./routes/authRoutes');
const newAuthRoutes = require('./routes/newAuthRoutes');
const cors = require('cors')
require('dotenv').config();

const app = express();
app.use(express.json());
app.use(cors())

app.use('/api/auth', authRoutes);
app.use('/api/auth', newAuthRoutes);

const PORT = process.env.PORT || 3000;

console.log(sequelize); 

sequelize.authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
        return sequelize.sync();
    })
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server running on port ${PORT}`);
        });
    })
    .catch(error => {
        console.error('Unable to connect to the database:', error);
    });
//mainnnnn