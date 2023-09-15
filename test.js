const express = require("express");
const mongoose = require("mongoose");
const app = express();
const port = process.env.port || 400;
const homeschema =require("../models/homemodule");



mongoose.connect("mongodb+srv://gurpreetbeniwal31386:VbrsKXVlbt1zSBfW@data.jgsnzrh.mongodb.net");
const db = mongoose.connection;
db.on("error",()=>{
    console.log("not connected");
})
db.once("open",()=>{
    console.log(" connected");
})
const email="gurpreetbeniwal31386@gmail.com"
const useremail =  homeschema.findOne({email:email})
console.log(useremail);

app.listen(port,()=>{
    console.log(`running on ${port}`);
})
