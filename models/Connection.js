const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  pet1: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  pet1Name: {
    type: String
  },
  pet2: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  pet2Name: {
    type: String
  }
}, {
  timestamps: true
});

module.exports = Connection = mongoose.model('connection', ConnectionSchema);
