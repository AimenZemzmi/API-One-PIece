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
 // character: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Character' }],
});

module.exports = mongoose.model('Crew', CrewSchema);
