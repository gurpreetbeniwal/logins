const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://gurpreetbeniwal31386:VbrsKXVlbt1zSBfW@data.jgsnzrh.mongodb.net");
const db = mongoose.connection;
module.exports=db;