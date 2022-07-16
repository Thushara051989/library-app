const express = require('express');
const router = express.Router();
var mongoose = require('mongoose');
var User = mongoose.model('User');
const ctrlUser = require('../controllers/usercontroller');
router.post('/register', ctrlUser.register);

module.exports = router;