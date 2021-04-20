const express = require("express");
const app = express();
const db = require('./config/keys').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const pets = require("./routes/api/pets");
const shelters = require("./routes/api/shelters")
const passport = require('passport');
require('./config/passport')(passport);
const path = require('path')
// const petfinder = require('pet-finder-api')('O3VtZUBdrAEgZNMxDVaJ4xtpBgb9DhqzJHZJBiAS1X92hQW1dM','rqux2BJLdfcABwqyDXa2ha6cESV0dunp8Wfo4ox2');
// let client = new petfinder.Client({apiKey: "my-api-key", secret: "my-api-secret"});

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));
// app.get("/shelters", (req, res) => {
//   res.send(petfinder.getBreedList('cat', function(err, breeds) {
//     console.log(breeds)
//   }));
// })


app.use(passport.initialize());


app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/pets", pets);
// app.use("/api/shelters", shelters);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
