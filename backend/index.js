// npm start
// to start backend

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
// routes
const register = require('./routes/register');
const login = require('./routes/login');
const routine = require('./routes/routine');
const privatetodo = require('./routes/todo');
// cors
const cors = require('cors');

const app = express();

// Midlewere

app.use(
  cors({
    origin: '*',
  })
);
app.use(express.json());
// request loger Midlewere
app.use((req, res, next) => {
  console.log('Request ip : ' + req.url);

  next();
});

// route Midleweres
app.use('/api', register);
app.use('/api', login);
app.use('/api', privatetodo);
app.use('/api', routine);


app.get('/', (req, res) => {
  res.status(200).json({ success: true, message: 'test',});
});


// db connect
mongoose
  .connect(process.env.MONGO_URL)
  .then(() => {
    console.log('db connected');
    app.listen(process.env.PORT || 5000, () => {
      console.log('app is running on port: ', +process.env.PORT, '+ db connected');
    });
  })
  .catch((err) => {
    console.log('no internet or... : ');
    console.log('mongo error', err);
  });
