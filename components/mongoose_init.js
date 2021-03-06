'use strict';

var config = require('config');
var path = require('path');
var mongoose = require('mongoose');
mongoose.connect(config.get('database.url'));

var playerModel = require(path.join('../models/player'));
var userModel = require(path.join('../models/admin'));
var loreModel = require(path.join('../models/lore'));

module.exports = mongoose;
