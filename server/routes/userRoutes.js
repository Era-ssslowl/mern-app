const express = require("express");
const router = express.Router();
const { getUsers, aggregateUsers } = require("../controllers/userController");

router.get("/", getUsers);
router.get("/aggregate", aggregateUsers);

module.exports = router;
