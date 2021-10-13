// calls the mongoose module, installed with npm, from the package.json
const mongoose = require("mongoose");

// connects to the database (here example from Guillaume)
mongoose
  .connect("mongodb://localhost/cohort-209-cats", {
    // some stuff needed for the connection, not even sure if it's mandatory
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  // if the connection is done, then execute what's in the function
  .then((x) => {
    console.log(
      `Connected to Mongo! Database name: "${x.connections[0].name}"`
    );
  })
  // if imppossible to execute what's inside the "then" function, catch the logic written in the catch part
  .catch((err) => console.error("Error connecting to mongo", err));
