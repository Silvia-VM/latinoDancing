const express = require("express");
const router = express.Router();
const Soirees = require("../models/modelSoiree.js");

//  **Create**
router.post("/soirees/create", async (req, res) => {
  try {
    const newSoirees = new Soirees({
      titre: req.body.titre,
      date: req.body.date,
      localisation: req.body.localisation,
      lieu: req.body.lieu,
      description: req.body.description,
      nomDanse: req.body.nomDanse,
      horairePrix: req.body.horairePrix
    });
    await newSoirees.save().then(soiree => {
      return soiree;
    });
    /* return res.json({
      titre: req.body.titre,
      date: req.body.date,
      localisation: req.body.localisation,
      lieu: req.body.lieu,
      description: req.body.description,
      nomDanse: req.body.nomDanse,
      horairePrix: req.body.horairePrix
    }); */
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
//**Read-lire**
router.get("/soirees", async (req, res) => {
  try {
    const result = await Soirees.find().populate("Soirees");
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
