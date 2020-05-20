import 'reflect-metadata';
import * as express from 'express';
import * as morgan from 'morgan';
import * as cors from 'cors';
import { createConnection } from 'typeorm';
import bodyParser = require('body-parser');

const app = express();

// const session = require("express-session");
createConnection()
  .then((connection) => {
    console.log('Database Connected');
  })
  .catch((error) => console.log(error));

//set middlewares
app.set('port', process.env.SERVER_PORT || 3000);
app.use(bodyParser.json());
app.use(
  bodyParser.urlencoded({
    extended: false,
  }),
);

app.use(morgan('dev'));
app.use(
  cors({
    origin: [`${process.env.TEST_IP}`],
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    credentials: true,
  }),
);

app.use(require('./routes'));
export default app;
