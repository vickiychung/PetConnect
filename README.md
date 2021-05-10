# <div align="center">![logo](https://i.imgur.com/JMN2Vub.png)</div>

PetConnect is a social media platform that allows pets to make new friends as well as find old ones. Users can see other pets that were adopted from the same shelter and current pets that match the user's zip code. Once logged in, the user chooses one of their pets to log in as. After logging in as a pet, the pet's connections and pending sent/incoming connection requests are displayed. Pets also have the ability to find other pets using different filters(location, shelter, species). 

PetConnect was built on a MERN stack which consits of MongoDB, a document-based NoSQL database, with use of Mongoose, an object data modeling (ODM) library, Express, an application framework library for Node, React-Redux frontend framework(using Axios, a promise based HTTP client that can be used in Node environment and browser), and lastly, Node, our JavaScript runtime environment.

[Connect your pet today!](http://pet-connect-app.herokuapp.com/)

## Technologies

### Frontend
* `React` - Open source, component-based JavaScript/UI library
* `Redux` - Commonly used with React, Redux is also a JavaScript library with a primary function of handling application state
* `Axios` - JavaScript library used to send promise-based, asynchronous HTTP requests to REST endpoints and perform CRUD operations

### Backend
* `MongoDB` - Document-oriented/NoSQL database that stores data in JSON-like documents
* `Mongoose`- Schema-based ODM library used to manage relationships between data
* `Node` - Open source server environment used to execute JavaScript code outside of the browser
* `Express` -  A web application framework used with Node that makes building websites, applications, and APIs much easier
* `BCrypt` - Password hashing/salting for user authentication
* `AWS` - Cloud service platform that assists with running web and application servers


## Features
* User Sign Up/Log In incorporating Passport.js with BCrypt hashing/salting
* Users can view other pets based on location, shelter and species
* Users can create, edit, and delete their pets
* Pet select screen that allows user to change between the active pet they will be making social connections with
* Pet connection modules that track current connections and pending requests that can be approved or declined

### User Sign up/Log in
Incorporated Passport.js with BCrypt hashing/salting to ensure safe and secure user authentication

![User Auth](https://media.giphy.com/media/EXsGDj1U0BI12QM5Zn/source.gif)

```javascript
//users.js

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
```

### Adding/Deleting/Editing a pet
 - Utilized AWS to incorporate image uploading functionality
 - Performed Axios requests to the backend to post/patch/delete pets
![Add and delete pet](https://media.giphy.com/media/CnPgEYrWCtc0f9M3Cr/source.gif)





### Shelter/Species/Location filters to reconnect with old friends or make new friends
Implemented conditional logic to display certain pets depending on which filter a user chooses
 - Location will show pets with owners within the same zip code
 - Shelter will show pets who were adopted from the same shelter
 - Species will show pets of the same species

![Filters](https://media.giphy.com/media/icTuO2eVG2J6jDSs8U/source.gif)
```javascript
//feed.js
this.props.pets.forEach(pet => {
  matchedUsers.forEach(user => {
    if (pet.user ===  user._id) {
      locationMatches.push(pet)
    }
  })
})

this.props.pets.forEach(pet => {
  if (compareWords(changeString(pet.shelter), changeString(currentPet.shelter)) && pet._id !== currentPet._id) {
    shelterMatches.push(pet)
  }
})

this.props.pets.forEach(pet => {
  if (pet.species.toLowerCase() === currentPet.species.toLowerCase() && pet._id !== currentPet._id) {
    speciesMatches.push(pet)
  }
})
```

### Connections between pets
 - Leveraged Axios requests and Express routing to give pets the ability to send each other connection requests. If accepted, they will be displayed under their connections tab and the total connections for the site will increase

 - Pets also have the ability to choose to deny a request, delete a sent request, as well as delete an existing connection

![Connections](https://media.giphy.com/media/bmex9QrcEc7RU6oo0A/source.gif)

## Future Implementations
 - A messaging system to give pets the ability to communicate with one another
 - The ability for pets to edit their existing photos as well as upload multiple photos
 - Integrating the PetFinder API to access country-wide shelter data 
 - Implementing a search feature so that pets can specifically search for other pets they might want to connect with
