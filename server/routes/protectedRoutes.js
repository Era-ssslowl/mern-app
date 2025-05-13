const express = require("express");
const router = express.Router();
const authenticate = require("../middlewares/auth");

router.get("/", authenticate, (req, res) => {
  res.json({ message: "Access granted!", user: req.user });
});

module.exports = router;
