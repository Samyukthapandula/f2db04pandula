const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    Dog_age: Number, 
    Dog_breed: String, 
    Dog_speciality: String 
}) 

module.exports = mongoose.model("dog",dogSchema) 