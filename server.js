require('./models/db');

const express = require('express');
var app = express();
const path = require('path');
const xhb = require('express-handlebars');

const studentController = require('./controllers/studentController');

app.set('views', path.join(__dirname, '/views/'));
app.engine('hbs', xhb({ extname: 'hbs', defaultLayout: 'defaultLayout', layoutsDir: __dirname + '/views/layouts/' }));
app.set('view engine', 'hbs');

app.listen(3000, () => {
    console.log('Express server started at port : 3000');
});

app.use('/student', studentController);