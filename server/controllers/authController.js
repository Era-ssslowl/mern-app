const User = require("../models/User");
const jwt = require("jsonwebtoken");

exports.register = async (req, res, next) => {
  try {
    const { name, email, password } = req.body;
    if (!name || !email || !password) {
      return res.status(400).json({ error: "Please fill all fields" });
    }

    const user = new User({ name, email, password });
    await user.save();
    res.status(201).json({ message: "User created" });
  } catch (error) {
    next(error);
  }
};

exports.login = async (req, res, next) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });

    if (!user || user.password !== password) {
      return res.status(400).json({ error: "Invalid credentials" });
    }

    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET);
    res.json({ message: "Login successful", token });
  } catch (error) {
    next(error);
  }
};
