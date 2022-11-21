require('dotenv').config();

require('./models');

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');

// Set Express
const app = express();

// Set CROS to access and set the format that the server will read the information (JSON)
app.use(cors());
app.use(express.json());

mongoose.connect(process.env.URI_MONGO);

app.use('/v1', routes);

app.listen(process.env.PORT, () => {
    console.log(`Server is working in the PORT: ${process.env.PORT}`);
})