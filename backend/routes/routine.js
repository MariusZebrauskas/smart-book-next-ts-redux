const express = require('express');
let router = express.Router();
let auth = require('./veryfyToken');
const Routine = require('../models/routine');

// midle auth were to verify token

// GET ROUTINE

router.post('/routine', auth, async (req, res) => {
  // routine logic
  let id = req.user._id;
  console.log('i run this id:', id)

  let routine = await Routine.findById({ _id: id });
  if (!routine)
  return res.status(400).json({ message: 'you can wiew only your routine', error: true });
  
  console.log('routine:', routine)
  res.status(200).json({ success: true, message: 'private todo', routine: routine.sevenDays, error: false });
});

module.exports = router;
