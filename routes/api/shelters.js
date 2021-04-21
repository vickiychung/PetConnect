const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');
const Shelter = require('../../models/Shelter')

const validateShelterInput = require('../../validation/shelters');

router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Shelter.find()
    .sort({ date: -1 })
    .then(shelters => res.json(shelters))
    .catch(err => res.status(404).json({ nosheltersfound: 'No shelters found '}));
});

router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Shelter.findById(req.params.id)
    .then(shelter => res.json(shelter))
    .catch(err => res.status(404).json({ noshelterfound: "No shelter found with that ID"}));
})

router.post('/register', (req, res) => {
  const { errors, isValid } = validateShelterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const newShelter = new Shelter({
    name: req.body.name,
    zipcode: req.body.zipcode
  });

  newShelter.save().then(shelter => res.json(shelter));
})

<<<<<<< HEAD
module.exports = router;
=======
module.exports = router;
>>>>>>> 8f8dce0401bfd0d18429ca7008e07ffc70b48f98
