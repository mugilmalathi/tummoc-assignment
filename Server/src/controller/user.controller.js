const express = require("express");
const User = require("../model/user.model")
const router = express.Router();

router.post("/", async (res, req) =>{
    const user = await User.create(req.body)
    return res.send(user)
})

router.get("/", async (res, req) =>{
    const user = await User.find().lean().exec()
    return res.send(user)
})

module.exports = router;
