const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePetInput(data) {
  let errors = {};

  data.species = validText(data.species) ? data.species : '';
  data.breed = validText(data.breed) ? data.breed : '';
  data.gender = validText(data.gender) ? data.gender : '';
  data.size = validText(data.size) ? data.size : '';
  data.name = validText(data.name) ? data.name : '';
  data.personality = validText(data.personality) ? data.personality : '';
  data.shelter = validText(data.shelter) ? data.shelter : '';

  if (!Validator.isMongoId(data.user)) {
    errors.user = 'Invalid user ID';
  }

  if (!Validator.isLength(data.species, { min: 2, max: 30 })) {
    errors.species = 'Species must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.breed, { min: 2, max: 30 })) {
    errors.breed = 'Breed must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
    errors.name = 'Name must be between 2 and 30 characters';
  }

  if (!Validator.isLength(data.shelterZip, { min: 5, max: 5 })) {
    errors.shelterZip = 'Shelter zip code must be 5 characters';
  }

  if (!Validator.isNumeric(data.shelterZip)) {
    errors.shelterZip = "Shelter zip code has to be a number";
  }

  if (!Validator.isNumeric(data.age)) {
    errors.age = "Age has to be a number";
  }

  if (Validator.isEmpty(data.user)) {
    errors.user = 'User field is required';
  }

  if (Validator.isEmpty(data.species)) {
    errors.species = 'Species field is required';
  }

  if (Validator.isEmpty(data.breed)) {
    errors.breed = 'Breed field is required';
  }

  if (Validator.isEmpty(data.gender)) {
    errors.gender = 'Gender field is required';
  }

  if (Validator.isEmpty(data.size)) {
    errors.size = 'Size field is required';
  }

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.age)) {
    errors.age = 'Age field is required';
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
