const express = require('express');
let router = express.Router();
let auth = require('./veryfyToken');
const TodoList = require('../models/todo');

// midle auth were to verify token

// GET TODOS

router.post('/gettodos', auth, async (req, res) => {
  let id = req.user._id;

  let list = await TodoList.findById({ _id: id });
  if (!list) return res.status(400).json({ message: 'you can add only to your list', error: true });

  res.json({ success: true, message: 'private todo', list: list.todos, error: false });
});

// UPDATE TODOS

router.post('/addtodos', auth, async (req, res) => {
  let id = req.user._id;

  let list = await TodoList.findById({ _id: id });
  if (!list) return res.status(400).json({ message: 'you can add only to your list', error: true });
  list.todos.push(req.body.newTodo);
  list.save();
  res.json({ success: true, message: 'add todo', list: list.todos, error: false });
});

// DELETE TODOS

router.post('/deletetodos', auth, async (req, res) => {
  let id = req.user._id;

  let list = await TodoList.findById({ _id: id });
  if (!list) return res.status(400).json({ message: 'you can add only to your list', error: true });

  // variables to do filtering
  let objText = req.body.objToDelete.text;
  let objId = req.body.objToDelete.id;
  try {
    // filter
    let newList = await list.todos.filter((li) => li.id !== objId);

    // update
    list.todos = [...newList];
    // save
    list.save();

    res.json({ success: true, message: 'delte todo', list: list, error: false });
  } catch (err) {}
});

// UPDATE TODOS


router.post('/updatetodos', auth, async (req, res) => {
  let id = req.user._id;


  let list = await TodoList.findById({ _id: id });
  if (!list) return res.status(400).json({ message: 'you can add only to your list', error: true });

  // variables to do filtering
  let dataFromClientToUpdate = req.body.edite;


  try {
    // update todo
    list.todos[dataFromClientToUpdate.id].text = dataFromClientToUpdate.editeText;
    // save and set update to db
    await TodoList.findByIdAndUpdate(
      { _id: id },
      {
        $set: { todos: list.todos},
      },
      {
        new: true,
      }
    );
    // console.log('list.todos:', list.todos);

    res.json({ success: true, message: 'update todo', error: false  });
  } catch (err) {
    console.log('err:', err);
  }
});

module.exports = router;
