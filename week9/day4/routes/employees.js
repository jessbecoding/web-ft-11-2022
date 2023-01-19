const express = require("express");
const router = express.Router();
const { Employees } = require("../models");

// CREATE
router.post("/create_employee", async (req, res) => {
  const { firstName, lastName, clinicId } = req.body;
  const newEmployee = await Employees.create({
    firstName,
    lastName,
    clinicId,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
  res.send(newEmployee);
});

// READ
router.get("/get_employees", async (req, res) => {
  const allEmployees = await Employees.findAll();
  res.send(allEmployees);
});

// UPDATE
router.put("/update_employee", async (req, res) => {
  const { firstName, lastName, clinicId } = req.body;
  await Employees.update(
    {
      firstName: firstName,
      lastName: lastName,
      clinicId: clinicId,
    },
    {
      where: {
        id: id,
      },
    }
  );
  const updatedEmployee = await Employees.findAll({
    where: {
      id: id,
    },
  });
  res.send(updatedEmployee);
});

// DESTROY
router.delete("/delete_employee", async (req, res) => {
  const { id } = req.body;
  await Employees.destroy({
    where: {
      id: id,
    },
  });
  const allEmployees = await Employees.findAll();
  res.send(allEmployees);
});

module.exports = router;
