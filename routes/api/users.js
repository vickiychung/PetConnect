const express = require("express")
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../../models/User');
const jwt = require('jsonwebtoken');
const keys = require('../../config/keys_dev');
const passport = require('passport');
const validateRegisterInput = require('../../validation/register')
const validateLoginInput = require('../../validation/login')

router.get("/test", (req, res) => res.json({ msg: "This is the users route"}));

router.get("/current", passport.authenticate("jwt", { session: false }), (req, res) => {
  res.json({
    id: req.user.id,
    username: req.user.username,
    email: req.user.email
  })
})

router.get('/', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  User.find()
    .sort({ date: -1 })
    .then(pets => res.json(pets))
    .catch(err => res.status(404).json({ nousersfound: "No users found"} ))
})

router.get('/:id', (req, res) => {
  passport.authenticate('jwt', { session: false }),
  User.findById(req.params.id)
    .then(user => res.json(user))
    .catch(err => 
      res.status(404).json({ nouserfound: 'No user found with that ID' }))
})

router.post("/register", (req, res) => {
  const { errors, isValid } = validateRegisterInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  User.findOne({ username: req.body.username }).then(user => {
    if (user) {
      errors.username = "User already exists";
      return res.status(400).json(errors);
    } else {
      const newUser = new User({
        username: req.body.username,
        email: req.body.email,
        password: req.body.password,
        zipcode: req.body.zipcode
      });

      bcrypt.genSalt(10, (err, salt) => {
        bcrypt.hash(newUser.password, salt, (err, hash) => {
          if (err) throw err;
          newUser.password = hash;
          newUser
            .save()
            .then(user => {
              const payload = { id: user.id, username: user.username };

              jwt.sign(payload, keys.secretOrKey, { expiresIn: 3600 }, (err, token) => {
                res.json({
                  success: true,
                  token: "Bearer " + token
                });
              });
            })
            .catch(err => console.log(err));
        });
      });
    }
  });
});


router.post("/login", (req, res) => {
  const { errors, isValid } = validateLoginInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email = req.body.email;
  const password = req.body.password;

  User.findOne({ email }).then(user => {
    if (!user) {
      return res.status(404).json({ email: "This user does not exist"});
    }

    bcrypt.compare(password, user.password).then(isMatch => {
      if (isMatch) {
        const payload = {
          id: user.id,
          username: user.username,
          email: user.email,
          zipcode: user.zipcode
        }
        jwt.sign(
          payload,
          keys.secretOrKey,
          { expiresIn: 3600 },
          (err, token) => {
            res.json({
              success: true,
              token: "Bearer " + token
            })
          }
        )
      } else {
        return res.status(400).json({password: "Incorect password"});
      }
    });
  });
});

module.exports = router;