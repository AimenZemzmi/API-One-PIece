const mongoose = require('mongoose');

const CharacterSchema = mongoose.Schema({
  name: {
    type: String,
    required: '{PATH} is required!',
  },
  bonus: {
    type: Number,
    required: '{PATH} is required!',
  },
  picture: String,
  is_pirate: {
    type: Boolean,
    required: '{PATH} is required!',
    default: true,
  },
  crew: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Crew' }],
});

module.exports = mongoose.model('Character', CharacterSchema);
