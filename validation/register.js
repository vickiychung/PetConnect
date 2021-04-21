const Validator = require("validator");
const validText = require("./valid-text");

module.exports = function validateRegisterInput(data) {
  let errors = {};

  data.username = validText(data.username) ? data.username : "";
  data.email = validText(data.email) ? data.email : "";
  data.password = validText(data.password) ? data.password : "";
  data.password2 = validText(data.password2) ? data.password2 : "";
  data.zipcode = validText(data.zipcode) ? data.zipcode : "";

  if (!Validator.isLength(data.username, { min: 5, max: 30 })) {
    errors.username = "Username must be between 5 and 30 chars";
  }

  if (Validator.isEmpty(data.username)) {
    errors.username = "Username field is required";
  }

  if (Validator.isEmpty(data.email)) {
    errors.email = "Email field is required";
  }

  if (!Validator.isEmail(data.email)) {
    errors.email = "Email is invalid";
  }

  if (Validator.isEmpty(data.password)) {
    errors.email = "Password is required";
  }

  if (!Validator.isLength(data.password, { min: 6, max: 30 })) {
    errors.password = "Password must be between 6 and 30 characters";
  }

  if (!Validator.equals(data.password, data.password2)) {
    errors.password2 = "Passwords must match";
  }

  // if (Validator.isEmpty(data.zipcode)) {
  //   errors.zipcode = "Zipcode is required";
  // }

  if (!Validator.isLength(data.zipcode, { min: 5, max: 5 })) {
    errors.zipcode = "Zip code must be 5 numbers"
  }

  if (!Validator.isNumeric(data.zipcode)) {
    errors.zipcode = "Zip code must be 5 numbers";
  }


  return {
    errors,
    isValid: Object.keys(errors).length === 0
  }
}