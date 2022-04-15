const mongoose = require('mongoose');
const Schema = mongoose.Schema;

// creating schema

const user = new Schema(
  {
    userName: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

// creating model

const User = mongoose.model('User', user);

// export

module.exports = User;
