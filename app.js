// needed to work with express
const express = require('express');
// needed to work with hbs
const hbs = require('hbs');
// set the app to use express
const app = express();
// set the port for the localhost later. Not mandatory
const port = 5550



//! INITIAL SETUP

// make accessible the elements used in POST (like forms...)
app.use(express.urlencoded());
// set the rendering engine for the views to hbs (see const hbs)
app.set("view engine", hbs);  
// set the path for the views
app.set("views", __dirname + "/views");
// use the path for the public files (css, javascript, assets)
app.use(express.static(__dirname + "/public"));
// register the hbs partials path
hbs.registerPartial(__dirname + "views/partials")



//! ROUTING
// set the variable to use the mainRouter, that is configured in a special routes folder
const mainRouter = require('./routers/routes.js');
// tells the app to use the main router just created
app.use(mainRouter);



//! KICKSTART APP
app.listen(port, ()=>{
    console.log("htttp://localhost" + port);
})


