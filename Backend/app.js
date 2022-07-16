const express = require('express');
const bodyParser=require('body-parser')
require("./models/user.model")
//require('./bookdb.js');
const rtsIndex = require('./routes/index.router');
var app = new express();
const cors = require('cors');
const booksRouter = require('./controllers/bookcontroller');
app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use('/api', rtsIndex);
app.use('/books',booksRouter); 
require('./config/config');
require('./models/db')
require("./models/user.model")
app.use(bodyParser.json());
app.use((err, req, res, next) => {
    if (err.name === 'ValidationError') {
        var valErrors = [];
        Object.keys(err.errors).forEach(key => valErrors.push(err.errors[key].message));
        res.status(422).send(valErrors)
    }
});
app.listen(process.env.PORT, ()=> console.log(`Server started at :${process.env.PORT}`))
