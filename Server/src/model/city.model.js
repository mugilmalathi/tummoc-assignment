const mongoose = require("mongoose");
const citySchema = mongoose.Schema({
    id:{type:Number},
    city_name:{type:String},
    city_location:{type:String},
    logo:{type:Number},
    pincode:{type:String},
    state:{type:String}
},{
    timestamp:true,
    versionkeys: false
})

module.exports = mongoose.model("city", citySchema) 