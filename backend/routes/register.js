const express = require('express');
let router = express.Router();
const User = require('../models/user');

router.get('/register', (req, res) => {
  const user = new User({
    userName: req.body.userName,
    password: req.body.password,
    email: req.body.email,
  });

  user.save()
  .then((results) => {
    res.status(200).json(results);
  })
  .catch((err) => {
    res.status(404).json({ error: err });
  });
});

module.exports = router;
