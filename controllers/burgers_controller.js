//--express connection
var express = require("express");

var router = express.Router();

// Import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");


// Created all our routes and set up logic within those routes where required.
router.get("/", function (req, res) {
    burger.selectAll(function (data) {
        var hBarObject = {
            burgers: data
        };
        console.log(hBarObject);
        res.render("index", hBarObject);
    });
});

//.post express call method in posting new burgers to the db
router.post("/api/burgers", function (req, res) {
    burger.insertOne([
        "burger_name", "devoured"
    ],
        [req.body.burger_name, req.body.devoured],
        function (result) {
            res.json({ id: result.insertId })
        });
});




// Export routes for server.js to use.
module.exports = router;