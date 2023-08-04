const express = require('express');
const cors = require('cors');
const connectDB = require('./database/db');
const routes = require('./Routes/index');
const cookieParser = require('cookie-parser');
const path = require('path');
const { log } = require('console');
require('dotenv').config();
const PORT = process.env.PORT || 8080;

const app = express();


app.use(express.json({limit:'50mb'}));
app.use(cookieParser());
app.use('/controller/images', express.static((__dirname +'/controller/images')));
app.use(express.urlencoded({ extended: true,limit:'50mb' }));
app.use(cors({
    credentials: true,
    origin: 'http://localhost:5173',
    // sameSites: true,
    // secure: true
}));
app.use('/api/v1/',routes)
app.get('/api/v1/',(req,res) => {
    res.status(200).json('welcome to spacee');
})
connectDB;
app.listen(PORT);