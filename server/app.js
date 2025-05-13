const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const errorHandler = require("./middlewares/errorHandler");

const authRoutes = require("./routes/authRoutes");
const userRoutes = require("./routes/userRoutes");
const protectedRoutes = require("./routes/protectedRoutes");

const app = express();

app.use(cors({
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
  credentials: true
}));
app.use(morgan("dev"));
app.use(express.json());

// Routes
app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);
app.use("/api/protected", protectedRoutes);

// Error handler
app.use(errorHandler);

module.exports = app;
