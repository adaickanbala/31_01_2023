
const mongoose = require("mongoose")

const data_schema = mongoose.Schema({
    name:{
        type:String,
        required:true
    },

   username:{
        type:String,
        required:true
    },
   password:{
        type:String,
        required:true
    },
})
module.exports = mongoose.model("employee",data_schema)