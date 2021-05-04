const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const Connection = require('../../models/Connection');

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Connection.find({ $or: [{pet1: req.params.id},{pet2: req.params.id}] })
      .then(connectRequest => res.json(connectRequest))
      .catch(err =>
        res.status(404).json({ noconnectionsfound: 'No connections found for this pet' })
      )
  }
);

router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  Connection.find()
      .sort({ date: -1 })
      .then(connections => res.json(connections))
      .catch(err => res.status(404).json({ noconnectionsfound: 'No connections found' }));
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newConnection = new Connection({
      pet1: req.body.pet1,
      pet2: req.body.pet2,
      pet1Name: req.body.pet1.name,
      pet2Name: req.body.pet2.name
    });

    newConnection.save()
      .then(connection => res.json(connection))
      .catch(err => res.json(err))
  }
);

router.delete('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    Connection.findByIdAndDelete(
      req.params.id,
      (err, result) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          res.send({
            status: "Deleted",
            _id: req.params.id
          })
        }
    });
  }
);

module.exports = router;
