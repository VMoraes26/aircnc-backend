const express = require('express');
const mongoose = require('mongoose');

const routes = require('./routes');

const app = express();

app.use(express.json());
app.use(routes);

mongoose.connect('mongodb+srv://root:1234@cluster0-sec11.mongodb.net/omnistack9?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})

app.listen(3333);