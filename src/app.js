const express = require('express');
const morgan = require('morgan');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const url = "mongodb://0.0.0.0:27017/validation-db";
const port = 7000;

const app = express();
const route = require('./routes');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(morgan('dev'));

app.use('/api', route);



// Connect to Database new
const ConnectToDB = async () => {
    try {
        await mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, connectTimeoutMS: 2000 });
        console.log("app successfully connected to mongodb")
    } catch (error) {
        console.log("error is:", error.message)
    }
}

ConnectToDB();

app.listen(port, () => console.log(`server running at port ${port}`));
