const express = require("express");
const router = express.Router();
const userController = require("../controllers/UserController");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/about", (req, res) => {
  res.send("About page");
});

router.get("/register", (req, res) => {
  res.send("Register page");
});

router.post("/register", (req, res) => {
  userController.createUser(req, res);
  res.send("");
});

module.exports = router;
