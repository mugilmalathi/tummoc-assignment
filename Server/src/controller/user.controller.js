const express = require("express");
const User = require("../model/user.model")
const router = express.Router();

router.post("/user", async (req, res)=>{
    try{
        const user = await User.create(req.body);
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err);
    }
})

router.get("/user", async (req, res)=>{
    try{
        const user = await User.find().lean().exec();
        return res.status(201).send(user)
    }catch(err){
        return res.status(500).send(err);
    }
})

module.exports = router;