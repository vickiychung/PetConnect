const express = require("express");
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

const ConnectionRequest = require('../../models/ConnectionRequest');
const Connection = require('../../models/Connection');

router.get('/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    ConnectionRequest.find({friend: req.params.id})
      .then(connectRequest => res.json(connectRequest))
      .catch(err =>
        res.status(404).json({ norequestsfound: 'No connection requests found for this pet' })
      )
  }
);

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newConnectRequest = new ConnectionRequest({
      friend: req.body.friend,
      pet: req.body.currentPet
    });

    newConnectRequest.save()
      .then(connectRequest => res.json(connectRequest))
      .catch(err => res.json(err))
  }
);

router.patch('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const accepted = req.body.accepted;

    if (accepted) {
      const newConnection = new Connection({
        pet1: req.body.friend,
        pet2: req.body.currentPet
      });

      newConnection.save()
        .then(connection => res.json(connection))
        .catch(err => res.json(err))

     ConnectionRequest.findByIdAndDelete(
        req.body.id,
        (err, result) => {
          if (err) {
            return res.status(400).json(err);
          } else {
            res.send({
              status: "Accepted",
              id: req.body.id
            });
          }
      });
    } else {
      ConnectionRequest.findByIdAndDelete(
        req.body.id,
        (err, result) => {
          if (err) {
            return res.status(400).json(err);
          } else {
            res.send({
              status: "Declined",
              id: req.body.id
            });
          }
      });
    }
  }
);

router.delete('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    ConnectionRequest.findByIdAndDelete(
      req.body.id,
      (err, result) => {
        if (err) {
          return res.status(400).json(err);
        } else {
          res.send({
            status: "Deleted",
            id: req.body.id
          });
        }
    });
  }
);

module.exports = router;
