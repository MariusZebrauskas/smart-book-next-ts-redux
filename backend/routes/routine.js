//FIXME: JWT PROTECTED ROUTE NEED CREATING

const express = require('express');
let router = express.Router();


const Routine = require('../models/routine');
// let auth = require('./veryfyToken');

// midle were to verify token

router.get('/routine', (req, res) => {
    console.log('req:', req.body.id)
    Routine.findById(req.body.id, function (err, docs) {
        if (err){
            console.log(err);
        }
        else{
            console.log("Result : ", docs.sevenDays);
        }
    });


  res.json({ success: true, message: 'private todo' });
});

module.exports = router;
