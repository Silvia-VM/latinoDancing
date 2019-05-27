const mongoose = require("mongoose");

const Cours = mongoose.model("Cours", {
  name: {
    type: String,
    minlength: 5,
    maxlength: 15,
    required: true
  },
  telephone: {
    type: Number,
    required: true,
    default: 0,
    min: 0
  },
  lien: {
    type: String
  }
});

module.exports = Cours;
