const mongoose = require("mongoose") 
const dogSchema = mongoose.Schema({ 
    Dog_age: {type:Number,min:1,max:6}, 
    Dog_breed: {type:String,maxLength:20}, 
    Dog_speciality: String 
}) 

module.exports = mongoose.model("dog",dogSchema) 