const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');

const Connection = require('../../models/Connection');

router.post('/',
  (req, res) => {
    const newConnection = new Connection({
      pet1: req.body.pet1,
      pet2: req.body.pet2
    });

    newConnection.save()
      .then(connection => res.json(connection))
      .catch(err => res.json(err))
  }
);

module.exports = router;
