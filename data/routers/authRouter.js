const db = require("../models/authModel");
const express = require("express");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const generateToken = require("../utils/generateToken");

const router = express.Router();

router.post("/register", handleUserRegistration);
router.post("/login", handleUSerLogin);
router.get("/users", handleUsersGet);

function handleUsersGet(req, res) {
  db.find()
    .then(data => {
      console.log(data);
      res.status(200).json(data);
    })
    .catch(error => {
      console.log(error);
      res.status(500).json({ errorMessage: error });
    });
}

function handleUSerLogin(req, res) {
  const { email, password } = req.body;
  db.findBy(email)
    .then(user => {
      if (bcrypt.compareSync(password, user.password)) {
        const token = generateToken(user);
        res
          .status(200)
          .json({ success: `Welcome ${user.email}`,userid:user.id, token: token });
      } else {
        res.status(403).json({ warning: "Please provide a valid password" });
      }
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
    });
}



function handleUserRegistration(req, res) {
  const user = {
    email: req.body.email,
    password: req.body.password
  };
  const hash = bcrypt.hashSync(user.password);
  user.password = hash;
  db.add(user)
    .then(() => {
      res
        .status(201)
        .json({ success: `Registration successful for user ${user.email}` });
      // console.log(data);
    })
    .catch(error => {
      res.status(500).json({ errorMessage: error.message });
      console.log(error);
    });
}
module.exports = router;
