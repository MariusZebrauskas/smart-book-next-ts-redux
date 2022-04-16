const express = require('express');
let router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// FIXME:vadidate inputs uaserName, email, password;

router.get('/register', (req, res) => {
  // unhashed password
  const myPlaintextPassword = req.body.password;

  //   chek DB for same email!
  User.findOne({ email: req.body.email }, (err, obj) => {
    if (obj) {
      return res.status(200).json({ message: 'sorry email is allready in use', userExists: true });
    } else if (err) {
      res.status(200).json({ message: err });
    } else {
      //   1.use bcrypt function to bcrypt password
      //   2. save and send new user with hashed pass to DB
      bcrypt.genSalt(saltRounds, function (err, salt) {
        bcrypt.hash(myPlaintextPassword, salt, function (err, hash) {
          // create user using schema with hased password
          const user = new User({
            userName: req.body.userName,
            password: hash,
            email: req.body.email,
          });
          // save and send to db new USER
          user
            .save()
            .then((results) => {
              res.status(200).json(results);
            })
            .catch((err) => {
              res.status(404).json({ error: err });
            });
        });
      });
    }
  });
});

module.exports = router;
