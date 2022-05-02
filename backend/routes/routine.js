const express = require('express');
let router = express.Router();
let auth = require('./veryfyToken');
const Routine = require('../models/routine');

// midle auth were to verify token

// GET ROUTINE

router.post('/routine', auth, async (req, res) => {
  // routine logic
  let id = req.user._id;

  // find routine
  let routine = await Routine.findById({ _id: id });
  if (!routine)
    return res.status(400).json({ message: 'you can wiew only your routine', error: true });

  // send routine
  res
    .status(200)
    .json({ success: true, message: 'private todo', routine: routine.sevenDays, error: false });
});

// UPDATE ROUTINE

router.post('/update-routine', auth, async (req, res) => {
  // routine logic
  let id = req.user._id;

  // find routine
  let routine = await Routine.findById({ _id: id });
  if (!routine)
    return res.status(400).json({ message: 'you can update only your routine', error: true });

  let dataFromClientToUpdate = req.body.update;

  try {

      // edite routine
    routine.sevenDays[0][dataFromClientToUpdate.index][dataFromClientToUpdate.day].message =
    dataFromClientToUpdate.message;

    // save data to db
     await Routine.findByIdAndUpdate(
        { _id: id },
        {
          $set: { sevenDays: [routine.sevenDays[0]]},
        },
        {
          new: true,
        }
      );
    
    res.status(200).json({
      success: true,
      message: 'private routine update',
      dataFromClientToUpdate: dataFromClientToUpdate,
      error: false,
    });
  } catch (err) {
    console.log(err);
  }
});

module.exports = router;
