// npm start
// to start backend

const express = require('express');
require('dotenv').config();
const mongoose = require('mongoose');
const register = require('./routes/register');

const app = express();

// midlewere

app.use(express.json());


// routes
app.use("/api", register);



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
    console.log('mongo error', err);
  });
