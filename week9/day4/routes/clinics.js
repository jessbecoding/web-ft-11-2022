const express = require("express");
const router = express.Router();
const { Clinics } = require("../models");

// CREATE
router.post("/create_clinic", async (req, res) => {
  const { clinicName, location, size } = req.body;
  const newClinic = await Clinics.create({
    clinicName,
    location,
    size,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(newClinic);
});

// READ
router.get("/get_clinics", async (req, res) => {
  const allClinics = await Clinics.findAll();
  res.send(allClinics);
});

// UPDATE

// DESTROY

module.exports = router;
