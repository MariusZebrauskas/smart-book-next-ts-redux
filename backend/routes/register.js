const express = require('express');
let router = express.Router();
const User = require('../models/user');
const TodoList = require('../models/todo');
const Routine = require('../models/routine');
const bcrypt = require('bcrypt');
const saltRounds = 10;
const { registerValidation } = require('../validation');

router.post('/register', async (req, res) => {
  // unhashed password
  const myPlaintextPassword = req.body.password;

  // VALIDATING DATA

  const { error } = registerValidation(req.body);
  if (error) return res.status(400).json({ error: 'Data invalid' });

  //   CHECK DB FOR SAME EMAIL!
  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist)
    return res.status(200).json({ message: 'Sorry email is allready in use', userExists: true });

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
            // create todo list
            const todoList = new TodoList({
              _id: results._id,
            });

            todoList.save();
            // create routine list
            const routine = new Routine({
              _id: results._id,
            });

            routine.save();


            res
              .status(200)
              .json({ message: 'Account has been created successfully', userExists: false });
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
