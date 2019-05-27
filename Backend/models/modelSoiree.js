const mongoose = require("mongoose");

const Soiree = mongoose.model("Soiree", {
  title: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  date: {
    type: String,
    minlength: 0,
    maxlength: 500,
    default: "",
    required: true
  },
  lieu: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  localisation: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  description: {
    type: String,
    minlength: 5,
    maxlength: 20000,
    required: true
  },
  nomDanses: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  horairePrix: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  Soiree: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Soiree"
  }
});

module.exports = Soiree;
