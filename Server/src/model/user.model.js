const mongoose = require("mongoose");
const userSchema = mongoose.Schema({
    id:{type:Number},
    name:{type:String},
    email:{type:String},
    phone:{type:Number},
    password:{type:String}
},{
    timestamp:true,
    versionkeys: false
})

module.exports = mongoose.model("user", userSchema) 