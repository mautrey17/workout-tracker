const express = require('express');
const mongoose = require('mongoose');
// const mongojs = require('mongojs');
// const path = require('path');

const PORT = process.env.PORT || 3333;

const db = require('./models');


const app = express();
const router = express.Router();

app.use(express.static('public'));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());



mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/workout', { useNewUrlParser: true });

app.use(require('./routes/html.js'));
app.use(require('./routes/api.js'));

app.listen(PORT, () => {
    console.log(`App listening on port ${PORT}`)
})