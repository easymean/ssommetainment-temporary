"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("reflect-metadata");
var express = require("express");
var morgan = require("morgan");
var cors = require("cors");
var typeorm_1 = require("typeorm");
var bodyParser = require("body-parser");
var app = express();
// const session = require("express-session");
typeorm_1.createConnection()
    .then(function (connection) {
    console.log('Database Connected');
})
    .catch(function (error) { return console.log(error); });
//set middlewares
app.set('port', process.env.SERVER_PORT || 3000);
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: false,
}));
app.use(morgan('dev'));
app.use(cors({
    origin: ["" + process.env.TEST_IP],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
}));
app.use(require('./routes'));
exports.default = app;
