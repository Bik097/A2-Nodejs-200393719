const mongoose = require('mongoose');

var url = 'mongodb+srv://bik:Test@12345@cluster0-k4bur.mongodb.net/test?retryWrites=true&w=majority';

mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true 
}).then(value => console.log('Chal Pda'));
// mongoose.connect('mongodb://localhost:27017/StudentDB', { useNewUrlParser: true }, (err) => {
//     if (!err) { console.log('MongoDB Connection Succeeded.') }
//     else { console.log('Error in DB connection : ' + err) }
// });

require('./student.model');