// const required to use express
const express = require('express');
// set a new express router to use in the app.js file
const router = new express.Router();

// calls the catModel from the models folder
const catModel = require('./../models/Cat.js');

// creates the controller for the all-cats.hbs page
const catController = (req, res, render) => {
    // logic goes here

    // render the elements of the page
    res.render("all-cats.hbs", {
        // render different alements if needed
    })
}


// route for the index page
router.get("/", ((req, res, next) => {
    res.render("index.hbs");
}));


// route for the all-cat page
router.get("/all-cats", catController);