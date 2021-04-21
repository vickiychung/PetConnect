const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validateShelterInput(data) {
  let errors = {};

  data.name = validText(data.name) ? data.name : "";
  // data.zipcode = validText(data.zipcode) ? data.zipcode : "";

  if (Validator.isEmpty(data.name)) {
    errors.name = "Name field is required";
  }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = "Zip code must be 5 numbers";
  }

  if (!Validator.isNumeric(data.zipcode)) {
    errors.zipcode = "Zip code must be 5 numbers"
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};