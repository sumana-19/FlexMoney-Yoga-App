import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import bodyParser from "body-parser";
import User from "./Models/userModel.js"
import dotenv from "dotenv"

const app = express();
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());
dotenv.config()

const PORT = process.env.PORT || 3001;

app.post("/", async (req, res) => {
  const user = req.body;
  const newUser = new User(user);

  try {
    await newUser.save();
    res.status(201).json("User created successfully!");
  } catch (e) {
    res.status(409).json({ message: e.message });
  }
});

app.use("/", (req, res) => {
  res.send("Helooooooooooo");
});

mongoose
  .connect(process.env.DB, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() =>
    app.listen(PORT, () => console.log(`Server running on port:${PORT}`))
  )
  .catch((err) => console.log(err));
