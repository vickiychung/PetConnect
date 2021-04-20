const Validator = require('validator');
const validText = require('./valid-text');

module.exports = function validatePetUpdate(data) {
  let errors = {};

  if (data.species) {
    data.species = validText(data.species) ? data.species : '';

    if (!Validator.isLength(data.species, { min: 2, max: 30 })) {
      errors.species = 'Species must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.species)) {
      errors.species = 'Species field is required';
    }
  }

  if (data.breed) {
    data.breed = validText(data.breed) ? data.breed : '';

    if (!Validator.isLength(data.breed, { min: 2, max: 30 })) {
      errors.breed = 'Breed must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.breed)) {
      errors.breed = 'Breed field is required';
    }
  }

  if (data.gender) {
    data.gender = validText(data.gender) ? data.gender : '';

    if (Validator.isEmpty(data.gender)) {
      errors.gender = 'Gender field is required';
    }
  }

  if (data.size) {
    data.size = validText(data.size) ? data.size : '';

    if (Validator.isEmpty(data.size)) {
      errors.size = 'Size field is required';
    }
  }

  if (data.name) {
    data.name = validText(data.name) ? data.name : '';

    if (!Validator.isLength(data.name, { min: 2, max: 30 })) {
      errors.name = 'Name must be between 2 and 30 characters';
    }

    if (Validator.isEmpty(data.name)) {
      errors.name = 'Name field is required';
    }
  }

  if (data.personality) {
    data.personality = validText(data.personality) ? data.personality : '';
  }

  if (data.shelter) {
    data.shelter = validText(data.shelter) ? data.shelter : '';
  }

  if (data.user) {
    if (!Validator.isMongoId(data.user)) {
      errors.user = 'Invalid user ID';
    }

    if (Validator.isEmpty(data.user)) {
      errors.user = 'User field is required';
    }
  }

  if (data.shelterZip) {
    if (!Validator.isLength(data.shelterZip, { min: 5, max: 5 })) {
      errors.shelterZip = 'Shelter zip code must be 5 characters';
    }

    if (!Validator.isNumeric(data.shelterZip)) {
      errors.shelterZip = "Shelter zip code has to be a number";
    }
  }

  if (data.age) {
    if (!Validator.isNumeric(data.age)) {
      errors.age = "Age has to be a number";
    }

    if (Validator.isEmpty(data.age)) {
      errors.age = 'Age field is required';
    }
  }

  return {
    errors,
    isValid: Object.keys(errors).length === 0
  };
};
