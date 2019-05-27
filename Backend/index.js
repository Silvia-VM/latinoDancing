const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");

app.use(bodyParser.json());

// mongoose.connect("mongodb://localhost/", { useNewUrlParser: true });

const Cours = require("./models/ModelCours");
const Festival = require("./models/ModelFestival");
const Soiree = require("./models/modelSoiree.js");

const coursRoutes = require("./routes/routesCours");
const festivalRoutes = require("./routes/routesFestival");
const soireesRoutes = require("./routes/routesSoirees.js");

app.use(coursRoutes);
app.use(festivalRoutes);
app.use(soireesRoutes);

app.listen(3000, () => {
  console.log("Server started");
});
