const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ConnectionSchema = new Schema({
  pet1: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  },
  pet2: {
    type: Schema.Types.ObjectId,
    ref: 'pets'
  }
}, {
  timestamps: true
});

module.exports = Connection = mongoose.model('connection', ConnectionSchema);
