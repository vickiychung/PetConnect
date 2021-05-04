const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionRequestSchema = new Schema({
  friend: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  friendName: {
    type: String
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  petName: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = ConnectionRequest = mongoose.model('connectionrequest', ConnectionRequestSchema);
