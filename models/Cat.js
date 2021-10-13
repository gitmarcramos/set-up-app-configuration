// calls the mongoose module, installed with npm, from the package.json
const mongoose = require("mongoose");

// store the moongose.Schema in a Schema variable
const Schema = mongoose.Schema;

// set the blueprint needed to create a new document in the database

const catSchema = new Schema({
    name: {type: String, required: true},
    color: {type: String, enum:["brown", "white", "black"]},
    age: Number
});


// store the catSchema for the collection cats in the CatModel variable
const CatModel = mongoose.model("cats", catSchema);

// exports the catSchema (model) for use in the routes
module.exports = CatModel;