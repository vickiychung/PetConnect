const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./config/keys_dev.js').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const users = require("./routes/api/users");
const pets = require("./routes/api/pets");
const connections = require("./routes/api/connections");
const passport = require('passport');
require('./config/passport')(passport);
const path = require('path')

app.use(cors());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.get("/", (req, res) => res.send("Hello World!!"));

app.use(passport.initialize());

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("/api/users", users);
app.use("/api/pets", pets);
app.use("/api/connections", connections);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));
