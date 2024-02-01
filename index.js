const mongoose = require("mongoose")
const express = require("express");
const { log } = require("console");
const app = express()

const router = require("./router")

mongoose.connect("mongodb://localhost:27017/practice")
.then(()=>{
    console.log("db connected");
})
.catch(()=>{
    log("db not connected")
})

app.listen(4001,()=>{
    console.log("port number 4001");

})

app.use("/api",router)