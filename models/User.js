var mongoose = require("mongoose")
var person = mongoose.Schema({
    _id: Number,
    Lastname: String,
    Firstname: String,
    Email: { type: String, lowercase: true },
    age: Number
})
module.exports=mongoose.model("Users", person)