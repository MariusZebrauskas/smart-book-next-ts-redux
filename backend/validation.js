const Joi = require('joi');

// REGISTER VALIDATION

const registerValidation = (params) => {
  const schema = Joi.object({
    userName: Joi.string().min(3).required(),
    email: Joi.string().max(255).required().email(),
    password: Joi.string().min(6).required(),
  });

  // DATA VALIDATION BEFORE WORKING WITH IT
  return (valiadtion = schema.validate(params));
};


const loginValidation = (params) => {
  const schema = Joi.object({
    email: Joi.string().max(255).required().email(),
    password: Joi.string().min(6).required(),
  });

  // DATA VALIDATION BEFORE WORKING WITH IT
  return (valiadtion = schema.validate(params));
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
