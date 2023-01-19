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
router.put("/update_clinic", async (req, res) => {
  const { id, clinicName, location, size } = req.body;
  await Clinics.update(
    {
      clinicName: clinicName,
      location: location,
      size: size,
    },
    {
      where: {
        id: id,
      },
    }
  );
  const updatedClinic = await Clinics.findAll({
    where: {
      id: id,
    },
  });
  res.send(updatedClinic);
});

// DESTROY
router.delete("/delete_clinic", async (req, res) => {
  const { id } = req.body;
  await Clinics.destroy({
    where: {
      id: id,
    },
  });
  const allClinics = await Clinics.findAll();
  res.send(allClinics);
});

module.exports = router;
