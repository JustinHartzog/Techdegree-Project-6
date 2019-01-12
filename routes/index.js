const express = require("express");
const router = express.Router();

// Requires data file
const { projects }  = require("../data.json");

// Root route
router.get("/", (req, res) => {
    res.render("index", { projects });
});

// About route


module.exports = router;
