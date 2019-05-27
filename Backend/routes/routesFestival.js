const express = require("express");
const router = express.Router();
const Festival = require("../models/ModelFestival");

//  **Create**
router.post("/festival/create", async (req, res) => {
  try {
    const newFestival = new Festival({
      name: req.body.name,
      mois: req.body.telephone,
      lieu: req.body.lien,
      site_web: req.body.site_web
    });
    await newFestival.save();
    return res.json({
      name: req.body.name,
      mois: req.body.telephone,
      lieu: req.body.lien,
      site_web: req.body.site_web
    });
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});
//**Read-lire**
router.get("/festival", async (req, res) => {
  try {
    const result = await Festival.find().populate("Festival");
    return res.json(result);
  } catch (error) {
    return res.status(400).json({ error: error.message });
  }
});

module.exports = router;
