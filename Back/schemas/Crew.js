const mongoose = require('mongoose');

const CrewSchema = mongoose.Schema({
  name: {
    type: String,
    required: '{PATH} is required!',
  },
  ship: {
    type: String,
    required: '{PATH} is required!',
  },
  picture: String,
});

module.exports = mongoose.model('Crew', CrewSchema);
