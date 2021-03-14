const express = require('express');
const route = express.Router();

const userControllers = require('../controllers/user')

const {check} = require('express-validator')

route.post('/signup', 
check('name')
.not()
.isEmpty(),
check('email')
.normalizeEmail(),
check('password')
.isLength({min:8})
, userControllers.signup)

module.exports = route