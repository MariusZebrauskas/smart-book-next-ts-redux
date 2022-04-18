//FIXME: JWT PROTECTED ROUTE NEED CREATING

const express = require('express');
let router = express.Router();
let auth = require('./veryfyToken');

// midle were to verify token

router.get('/privatetodo', auth, (req, res) => {
    console.log('req:', req.user)

  res.json({ success: true, message: 'private todo' });
});

module.exports = router;
