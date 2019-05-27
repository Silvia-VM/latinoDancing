const express = require("express");
const router = express.Router();
const Cours = require("../models/ModelCours");

//  **Create**
router.post("/cours/create", async (req, res) => {
  try {
    const newCours = new Cours({
      name: req.body.name,
      telephone: req.body.telephone,
      lien: req.body.lien
    });
    await newCours.save();
    return res.json({
      name: req.body.name,
      telephone: req.body.telephone,
      lien: req.body.lien
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
//**Read-lire**
router.get("/cours", async (req, res) => {
  try {
    const result = await Cours.find().populate("Cours");
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
