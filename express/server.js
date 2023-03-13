require('dotenv').config()
const express = require('express')
const app = express()
const path = require('path')
const cors = require('cors')
const errorHandler = require('./middlewares/errorHandler')
const credentials = require('./middlewares/credentials')
const mongoose = require('mongoose')
const connectDB = require('./config/dbConn')
const colors = require('colors');
const corsOptions = require('./config/corsOptions')
const PORT = process.env.PORT || 9000


connectDB();

app.use(credentials);

app.use(cors(corsOptions));


app.use(express.urlencoded({ extended: false }));

app.use(express.json());

app.use('/', express.static(path.join(__dirname, '/public')));

// static page routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '/views', 'index.html'))
})

// api routes
app.use('/contacts', require('./routes/api/contacts'));

// catch all
app.all('*', (req, res) => {
    res.status(404);
    if (req.accepts('html')) {
        res.sendFile(path.join(__dirname, '/views', '404.html'));
    } else if (req.accepts('json')) {
        res.json({ 'error': '404 Not Found' });
    } else {
        res.type('txt').send('404 Not Found');
    }
});


app.use(errorHandler);

mongoose.connection.once('open', () => {
    console.log('Connected to MongoDB 👍'.cyan.underline.bold);
    app.listen(PORT, () => console.log(`Server is running on port ${PORT}`.blue.underline.bold));
});
