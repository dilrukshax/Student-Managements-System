import  path  from 'path';

const express = require("express");
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const dotenv = require("dotenv");
const app = express();
require('dotenv').config();

const__dirname = path.resolve();

app.use(express.static(path.join(__dirname, '/frontend/dist')));

app.get('*', (req, res) => {
    res.sendFile
    (path.resolve(__dirname, 'frontend', 'dist', 'index.html'));
});



const PORT = process.env.PORT || 8070;

app.use(cors());
app.use(bodyParser.json());

const URL = process.env.MONGODB_URL;

mongoose.connect(URL, {
    // useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true,
    // useFindAndModify: false
});

const connection = mongoose.connection;
connection.once("open", () => {
    console.log("MongoDB connection success!");
});

const studentRouter = require('./routes/students.js');

app.use('/students', studentRouter);

app.listen(PORT, () => {
    console.log(`Server is up and running on port number: ${PORT}`);
});