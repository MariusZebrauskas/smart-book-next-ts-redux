const express = require('express');
let router = express.Router();
let auth = require('./veryfyToken');
const TodoList = require('../models/todo');

// midle were to verify token

router.post('/gettodos', auth, async (req, res) => {
  let id = req.user._id;

  let list = await TodoList.findById({ _id: id });
  if (!list) return res.status(400).json({ message: 'you can add only to your list', error: true });

  res.json({ success: true, message: 'private todo', list: list.todos, error: false });
});

router.post('/addtodos', auth, async (req, res) => {
  let id = req.user._id;

  let list = await TodoList.findById({ _id: id });
  if (!list) return res.status(400).json({ message: 'you can add only to your list', error: true });
  list.todos.push(req.body.newTodo);
  list.save();
  res.json({ success: true, message: 'add todo', list: list.todos, error: false });
});

module.exports = router;
