const mongoose = require("mongoose");

const Festival = mongoose.model("Festival", {
  name: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  mois: {
    type: String,
    minlength: 5,
    maxlength: 25,
    required: true
  },
  lieu: {
    type: String,
    minlength: 0,
    maxlength: 500,
    default: "",
    required: true
  },
  site_web: {
    type: String,
    required: true,
    default: 0,
    min: 0
  },
  Festival: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Festival"
  }
});

module.exports = Festival;
