const express = require('express');
let router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;

// FIXME:vadidate inputs uaserName, email, password;

router.post('/login', (req, res) => {
  // unhashed password
  const myPlaintextPassword = req.body.password;

  //   chek DB for same email!
  User.findOne({ email: req.body.email }, (err, userFromDb) => {
    if (!userFromDb) {
      return res
        .status(200)
        .json({ message: 'sorry email or password is invalid', userExists: false });
    } else if (userFromDb) {
      // when user is found need to compare password vs bcrypt pass
      /* user data */
      let hash = userFromDb.password;
      const { _id, userName, email } = userFromDb;
      const user = { _id, userName, email };

      bcrypt.compare(myPlaintextPassword, hash, function (err, result) {
        if (result) {
          // is password  is correct login
          return res.status(200).json({ success: true, message: 'you are logged in', user });
        } else {
          // if password is incorect return unauthorized
          return res
            .status(200)
            .json({ success: false, message: 'you are not authorized to access' });
        }
      });
    } else {
      res.status(200).json({ success: false, err });
    }
  });
});

module.exports = router;
