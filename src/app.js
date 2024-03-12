const express = require('express');
const cors = require('cors');
const compression = require('compression');
const router = require('./routes');

require('dotenv').config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(compression());

app.use(cors());
app.options('*', cors());

app.use('/api', router);

module.exports = app;
