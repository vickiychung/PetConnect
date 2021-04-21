const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ShelterSchema = new Schema({
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  name: {
    type: String,
    required: true
  },
  zipcode: {
    type: Number,
    required: true
  }
}, {
  timestamps: true
});

const Shelter = mongoose.model('shelter', ShelterSchema);

module.exports = Shelter;