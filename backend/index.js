// npm start
// to start backend

const express = require('express');
require('dotenv').config();

const app = express();

// routes

app.get('/', (req, res) => {
  res.status(200).json({ message: 'hey im here' });
});


app.listen(process.env.PORT, () => {
    console.log('app is running on port: ', + process.env.PORT);
});


