//--express connection
var express = require("express");

var routeer = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

