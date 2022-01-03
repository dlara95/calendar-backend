const express = require('express');
require('dotenv').config();
const { dbConnection } = require('./database/config');

const app = express();

dbConnection();

// Directorio publico

app.use(express.static('public'));

app.use(express.json());

app.use('/api/auth', require('./routes/auth'));

app.listen(process.env.PORT, () => {
    console.log('listening on port 4000');
});