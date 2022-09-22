const express = require("express");
const mongoose = require("mongoose");
const app = express();
// const cors = require("cors");
app.use(express.json());
// app.use(cors());
// require("dotenv").config();
// const connect = require("./config/db");

// const PORT = process.env.PORT || 1234;

mongoose.connect("mongodb://localhost:27017/userAuth")

const userController = require("./controller/user.controller");

app.use("/", userController);

app.listen(8181, async(req, res)=>{
    // await connect();
    console.log("DB is Conected..!")
})