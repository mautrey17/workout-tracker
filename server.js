const express = require('express');
const mongoose = require('mongoose');

const PORT = process.env.PORT || 3333;

const db = require('./models');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static('public'));

mongoose.connect(process.env.MONGODB_URI || 'mongodb://localhost/populatedb', { useNewUrlParser: true });

