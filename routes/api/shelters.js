// router.get("/shelters", (req, res) => res.json({
  
// }))
// const express = require("express");
// const router = express.Router();

// const petfinder = require("@petfinder/petfinder-js");
// const petfinder = require('pet-finder-api')('O3VtZUBdrAEgZNMxDVaJ4xtpBgb9DhqzJHZJBiAS1X92hQW1dM','rqux2BJLdfcABwqyDXa2ha6cESV0dunp8Wfo4ox2');
// import { Client } from "@petfinder/petfinder-js";

// petfinder.getBreedList('cat', function(err, breeds) {
//   console.log(breeds)
// });

// const client = new Client({
//   apiKey: "O3VtZUBdrAEgZNMxDVaJ4xtpBgb9DhqzJHZJBiAS1X92hQW1dM",
//   secret: "rqux2BJLdfcABwqyDXa2ha6cESV0dunp8Wfo4ox2",
//   token: "my-access-token",
// });

// client.authenticate()
//   .then(resp => {
//     const token = resp.data.access_token;
//     const expires = resp.data.expires_in;
//   });

// router.get("/") 
// client.animal.search()
//   .then(function (response) {
//     console.log(response.data.animals)
//   })
//   .catch(function (error) {
//     console.log(error)
//   })


// async function showAnimals(animalType, searchBreed) {
//   let page = 1;
//   do {
//     apiResult = await client.animal.search({
//       type: animalType,
//       breed: searchBreed,
//       page,
//       limit: 100,
//     });
//     let dogIdx = (page - 1) * 100;
//     apiResult.data.animals.forEach(function(animal) {
//       console.log(` -- ${++dogIdx}: ${animal.name} id: ${animal.id} url: ${animal.url}`);
//     });

//     page++;
//   } while(apiResult.data.pagination && apiResult.data.pagination.total_pages >= page);
// }

// (async function() {
//   await showAnimals("Dog", "Bernedoodle");
// })();




// module.exports = router;