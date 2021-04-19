const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const PetSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  species: {
    type: String,
    required: true
  },
  breed: {
    type: String,
    required: true
  },
  age: {
    type: Number,
    required: true
  },
  gender: {
    type: String,
    required: true
  },
  size: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  personality: {
    type: String,
    required: false
  },
   shelter: {
    type: String,
    required: false
  },
  shelterZip: {
    type: Number,
    required: false
  }
});

module.exports = Pet = mongoose.model('pet', PetSchema);
