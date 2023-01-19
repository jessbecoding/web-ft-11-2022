const express = require("express");
const router = express.Router();
const { Users } = require("../models");
const bcrypt = require("bcrypt");

router.post("/create_user", (req, res) => {
  const { username, password } = req.body;
  bcrypt.hash(password, 10, async (err, hash) => {
    // create the user in the table with hash password
    const user = await Users.create({
      username: username,
      password: hash,
      createdAt: new Date(),
      updatedAt: new Date(),
    });
    res.send(user);
  });
});

router.post("/login_user", async (req, res) => {
  const { username, password } = req.body;
  const user = await Users.findOne({
    where: {
      username: "blossom",
    },
  });
  bcrypt.compare(password, user.password(err, res));
  console.log(err);
  console.log(result);
});

module.exports = router;
