const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionRequestSchema = new Schema({
  friend: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  pet: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  }
}, {
  timestamps: true
});

module.exports = ConnectionRequest = mongoose.model('connectionrequest', ConnectionRequestSchema);
