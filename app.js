const express = require("express");
const cors = require("cors");
const app = express();
const db = require('./config/keys.js').mongoURI;
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');
const path = require('path')

const users = require("./routes/api/users");
const pets = require("./routes/api/pets");
const shelters = require("./routes/api/shelters");
const connections = require("./routes/api/connections");
require('./config/passport')(passport);


app.use(cors());

mongoose
  .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB successfully"))
  .catch(err => console.log(err));

app.use(passport.initialize());

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use("/api/users", users);
app.use("/api/pets", pets);
app.use("/api/connections", connections);
app.use("/api/shelters", shelters);

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server is running on port ${port}`));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('frontend/build'));
  app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'frontend', 'build', 'index.html'));
  })
}
