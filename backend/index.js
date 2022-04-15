// npm start
// to start backend

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');

const app = express();

// midlewere

app.use(express.json());

// routes

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hey im here' });
});

app.post('/', (req, res) => {
  const { name } = req.body;
  console.log('name:', name);

  res.status(200).json({ message: 'post me data', name: name });
});





// db connect
  mongoose
    .connect(process.env.MONGO_URL)
    .then(() => {
      console.log('db connected');
      app.listen(process.env.PORT, () => {
      console.log('app is running on port: ', +process.env.PORT, '+ db connected');
    });
    })
    .catch((err) => {
      console.log('mongo error', err);
    });
