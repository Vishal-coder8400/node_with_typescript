"use strict";
const mongoose = require("mongoose");
require("dotenv").config();
const mongodbUrl = process.env.DB_URL;
mongoose.connect(mongodbUrl, {
    useNewUrlParser: true,
    useUnifiedTopology: true
});
const db = mongoose.connection;
db.on('connected', () => {
    console.log('Connected to Mongodb Server');
});
db.on('error', () => {
    console.log('Mongodb connection error');
});
db.on('disconnected', () => {
    console.log('Mongodb disconnected');
});
module.exports = db;
