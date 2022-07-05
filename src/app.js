const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config()
const app = express();
const route = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', route);



// Connect to Database new
mongoose.connect(
    'mongodb://localhost/validation-db',
    { useNewUrlParser: true },
    (err) => {
        if (err) {
            console.log(err);
        } else {
            console.log('Successfully Connected to the database');
        }
    }
);

app.listen(process.env.PORT);
console.log(`The magic happens at ${process.env.HOST}:${process.env.PORT}`);
