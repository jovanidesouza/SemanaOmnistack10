require('dotenv').config()

const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const routes = require('./routes');
const db_string = process.env.DATABASE_KEY;

const app = express();

mongoose.connect(db_string, { 
    useNewUrlParser: true, 
    useUnifiedTopology: true,
    useCreateIndex: true
});

app.use(cors())
app.use(express.json());
app.use(routes);

app.listen(3333);

  