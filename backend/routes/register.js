const express = require('express');
let router = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { registerValidation } = require('../validation');

// VALIDATION
// const Joi = require('joi');
// const schema = Joi.object({
//   userName: Joi.string().min(3).required(),
//   email: Joi.string().max(255).required().email(),
//   password: Joi.string().min(6).required(),
// });

router.post('/register', async (req, res) => {
  // unhashed password
  const myPlaintextPassword = req.body.password;

  // VALIDATING DATA

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send({ error: error.details[0].message });

  //   CHECK DB FOR SAME EMAIL!
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(200).json({ message: 'sorry email is allready in use', userExists: true });

  try {
    //   1.use bcrypt function to bcrypt password
    //   2. save and send new user with hashed pass to DB
    // https://www.youtube.com/watch?v=2jqok-WgelI
    // time : 43:22
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
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
