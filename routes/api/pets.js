const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Pet = require('../../models/Pet');
const validatePetInput = require('../../validation/pets');
const validatePetUpdate = require('../../validation/pet-update');

router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Pet.find()
      .sort({ date: -1 })
      .then(pets => res.json(pets))
      .catch(err => res.status(404).json({ nopetsfound: 'No pets found' }));
});

router.get('/user/:user_id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Pet.find({user: req.params.user_id})
      .then(pets => res.json(pets))
      .catch(err =>
          res.status(404).json({ nopetsfound: 'No pets found from that user' }
      )
  );
});

router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Pet.findById(req.params.id)
      .then(pet => res.json(pet))
      .catch(err =>
          res.status(404).json({ nopetfound: 'No pet found with that ID' })
      );
});

router.post('/register',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePetInput(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    const newPet = new Pet({
      species: req.body.species,
      breed: req.body.breed,
      gender: req.body.gender,
      size: req.body.size,
      name: req.body.name,
      personality: req.body.personality,
      shelter: req.body.shelter,
      shelterZip: req.body.shelterZip,
      age: req.body.age,
      user: req.user.id
    });

    newPet.save().then(pet => res.json(pet));
  }
);

router.patch('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const { errors, isValid } = validatePetUpdate(req.body);

    if (!isValid) {
      return res.status(400).json(errors);
    }

    Pet.findByIdAndUpdate(
      req.params.id, 
      {$set: req.body}, 
      {new: true}, 
      (err, result) => {
        if(err) {
          return res.status(400).json(err);
        }
        res.send("Updated");
    });
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Pet.findByIdAndDelete(
      req.params.id,
      (err, result) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          res.send("Deleted");
        }
    });
  }
)

module.exports = router;
