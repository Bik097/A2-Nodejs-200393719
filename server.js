require('./models/db');

const express = require('express');
var app = express();

const studentController = require('./controllers/studentController');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/student', studentController);