const express = require("express");
const { Op } = require("sequelize");
const router = express.Router();
const { Owners, Pets } = require("../models");

router.get("/get_pets", async (req, res) => {
  const pets = await Pets.findAll();
  res.send(pets);
});

router.get("/get_owners", async (req, res) => {
  const owners = await Owners.findAll();
  res.send(owners);
});

router.get("/find_Jessika", async (req, res) => {
  const Jessika = await Owners.findAll({
    where: {
      firstName: "Jessika",
    },
  });
  res.send(Jessika);
});

router.get("/find_Leia", async (req, res) => {
  const Leia = await Pets.findAll({
    where: {
      name: "Leia",
    },
  });
  res.send(Leia);
});

router.get("/get_petsID", async (req, res) => {
  const pets = await Pets.findAll({
    where: {
      id: {
        [Op.gte]: 2,
        [Op.lte]: 4,
      },
    },
  });
  res.send(pets);
});

router.post("/create_pet", async (req, res) => {
  const { name, type, age } = req.body;
  const newPet = await Pets.create({
    name,
    type,
    age,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(newPet);
});

module.exports = router;
