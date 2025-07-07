const mongoose = require('mongoose');

const memberSchema = new mongoose.Schema({
  name: { type: String, required: true },
  age: { type: Number, required: true },
  university: { type: String, required: true },
  email: {
    type: String,
    required: true,
    unique: true,
    match: [/^\S+@\S+\.\S+$/, "Invalid email format"]
  },
  phone: {
    type: String,
    required: true,
    match: [/^\d{11}$/, "Phone number must be 11 digits"]
  },
  technicalCommittee: String,
  nonTechnicalCommittee: String,
  imageUrl: String
});

module.exports = mongoose.model('Member', memberSchema);
