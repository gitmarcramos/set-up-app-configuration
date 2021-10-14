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


// route for the all-cat page, with a callback function "catController"
router.get("/all-cats", catController);


// route for the cat detail. 
//This one is tricky: it creates a page without having to hardcode it, by generating a page using the ObjectID of the database document
// Use "/:id" to fetch the ID of the selected element, an then render it on the proper HBS page
// Use of ASYNC/AWAIT inside the function to handle the promise, if needed (ie: database call)
// Execute the logic inside the TRY bloc, handle the error inside the CATCH block
router.get("/:id", async (req, res, next) => {
    // TRY to executes the code asynchronously
    try{
              //logic goes here 
        //======> +++++++++ <===============

        // renders the elemnts of the page
        res.render("details-cat.hbs", {
            //render different elements of the page here
        })
        // if the code is not executed, send an error to the terminal
    } catch (e) {
        console.error(e);
    }

})