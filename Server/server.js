//app.js
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const route = require('./routers/product.route'); // Imports routes for the products
const app = express();

// Set up mongoose connection
const mongoose = require('mongoose');
let dev_db_url = 'mongodb+srv://wcai49:wcai666666@cluster0-czrr1.mongodb.net/test?retryWrites=true&w=majority';
let mongoDB = process.env.MONGODB_URI || dev_db_url;
mongoose.connect(mongoDB, { useUnifiedTopology: true, useNewUrlParser: true });
mongoose.Promise = global.Promise;
let db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use('/api', route);
app.use(express.static(path.join(__dirname, 'public')));
let port = 8081;
app.listen(port, () => {
    console.log('Server is up and running on port numner ' + port);
});
