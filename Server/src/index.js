const express = require("express");
const app = express();
const cors = require("cors");
app.use(express.json());
app.use(cors());
require("dotenv").config();
const connect = require("./config/db");

const PORT = process.env.PORT || 1234;

const userController = require("./controller/user.controller");

app.use("/", userController);

app.listen(PORT, async(req, res)=>{
    await connect();
    console.log("DB is Conected..!")
})