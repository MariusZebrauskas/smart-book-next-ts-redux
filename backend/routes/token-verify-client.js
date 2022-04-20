const express = require('express');
let router = express.Router();
const User = require('../models/user');

let auth = require('./veryfyToken');

router.post('/tokenverifyclient', auth, (req, res) => {
  let id = req.user._id;
  let email = req.body.email;
  User.findById({ _id: id }, (err, user) => {
    if (err) return res.status(401).json({ aaccess: false });
    if (user) {
      if (user.email === email) {
        return res.status(200).json({ aaccess: true });
      } else {
        return res.status(401).json({ access: false });
      }
    }
  });
});

module.exports = router;
