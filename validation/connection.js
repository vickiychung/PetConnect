const Validator = require("validator");
const validText = require('./valid-text')

module.exports = function(data) {
  let errors = {};

  data.pet1 = validText(data.pet1) ? data.pet1 : '';
  data.pet2 = validText(data.pet2) ? data.pet2 : '';


//   if (!Validator.equals(str, comparison)) {
//     errors.email = "Can't connect with self";
//   }

//   if (!Validator.equals(str, comparisonl)) {
//     errors.email = "Already connected";
//   }

//   if (!Validator.equals(str, comparison)) {
//     errors.password = "Already requesting friendship";
//   }

//   return {
//     errors,
//     isValid: Object.keys(errors).length === 0
//   }
}