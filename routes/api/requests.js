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

router.get('/sent/:id',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    ConnectionRequest.find({pet: req.params.id})
      .then(connectRequest => res.json(connectRequest))
      .catch(err =>
        res.status(404).json({ norequestsfound: 'No connection requests found for this pet' })
      )
  }
);

router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  ConnectionRequest.find()
      .sort({ date: -1 })
      .then(connectionRequests => res.json(connectionRequests))
      .catch(err => res.status(404).json({ noconnectionsrequestsfound: 'No connection requests found' }));
});

router.post('/',
  passport.authenticate('jwt', { session: false }),
  (req, res) => {
    const newConnectRequest = new ConnectionRequest({
      friend: req.body.friend._id,
      friendName: req.body.friend.name,
      pet: req.body.currentPet._id,
      petName: req.body.currentPet.name
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
        pet2: req.body.currentPet,
        pet1Name: req.body.friendName,
        pet2Name: req.body.currentPetName
      });

      
      newConnection.save()


     ConnectionRequest.findByIdAndDelete(
        req.body.id,
        (err, result) => {
          if (err) {
            return res.status(400).json(err);
          } else {
            res.send({
              status: "Accepted",
              id: req.body.id,
              _id: req.body.id,
              pet1: req.body.friend,
              pet2: req.body.currentPet,
              pet1Name: req.body.friendName,
              pet2Name: req.body.currentPetName
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
