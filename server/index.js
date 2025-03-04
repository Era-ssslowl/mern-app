const express = require("express");
const fs = require("fs");
const jwt = require("jsonwebtoken");
const morgan = require("morgan");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const { decode } = require("punycode");

dotenv.config();
const app = express()
const PORT = process.env.PORT || 3000;
const MONGO_URI = process.env.MONGO_URI

mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.log(err));

app.use(morgan("dev"));
app.use(express.json());


const UserSchema = new mongoose.Schema({
  name: String,
  email: String,
  password: String,
});

const User = mongoose.model("User", UserSchema);

const authenticate = (req, res, next) => {
  const token  = req.header("Authorization");
  if (!token) return res.status(401).send("Access Denied");

  try{
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  }catch (error) {
    res.status(400).json({ error: "Invalid token." });
  }

};

const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ error: "Internal Server Error" });
};



app.get("/readfile", (req, res, next) => {
  fs.readFile("data.txt", "utf8", (err, data) => {
    if(err) {
      next(err);
    }else{
      res.json({content: data});
    }
  })
})

app.get("/protected", authenticate, (req, res) => {
  res.json({ message: "Access granted!", user: req.user });
});


app.post("/register", async (req, res, next) => {
  try{
    const { name, email, password } = req.body;
    const user = new User({name, email, password});
    await user.save();

    res.status(201).json({message: "User created"})
  }catch (error) {
    next(error);
  }
})


app.get("/users", async (req, res, next) => {
  try{
    const users = User.find();
    res.json(users);

  }catch(error){
    next(error);
  }

})

app.use(errorHandler);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});