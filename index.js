/* Configurating express server */

const express = require('express');
const  app = express();

/* Importing routes. */

const serverRoute = require('./server');
const bodyParser = require('body-parser');


/* Content route. */

app.use(bodyParser.json());
app.use('/server',serverRoute);

/* Connecting to database. */

const mongoose = require("mongoose");
require("dotenv").config({path:  'config/.env'});
const port = 4000;
const url = process.env.MONGO_URI;
mongoose.connect(url);
const connection = mongoose.connection;
connection.once("open",() => {
    console.log("mongoDB database connection established successfully.");
});

/* Home page route. */

app.get('/', (req, res) => {
    res.send('Welcome to our home page , type http://localhost:4000/server on URL field to reach our content.');
});


/* Listening to the server on port 4000. */

app.listen(port, () => {
    console.log(`App is listening at http://localhost:${port}`);
});