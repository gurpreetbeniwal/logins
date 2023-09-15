const express = require("express");
const router =express.Router();
const db = require("../database")
const homeschema =require("../models/homemodule");
const pass="gurpreet@999";

db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})



router.get("/",(req,res)=>{
    res.render('admin');
})


router.post("/data", async (req,res)=>{
    
    const  password   = req.body.password ;
    
    const Data = await homeschema.find({});
    
    if(pass===password){
    res.render('admindash',{data:Data});
    }
    else{
    res.send("<h1>Wrong password</h1>");
    }
});

router.post("/edit", async (req,res)=>{
    
    const  userId   = req.body.userId ;
    console.log("Received userId:", userId );
    const user = await homeschema.find({_id:userId});
    
    // console.log(user);
    // console.log(user[0].email);
    // const user ={
    //     name:"gurpreet",
    //     number:"98989877",
    //     email:"gudu@gmail.com",
    //     password:"jijjj"
    // }
    
    res.render('adminedit',{user:user});
});
router.post("/editone", async (req, res) => {
    const {
        id, name, number, email, password
    } = req.body;

    // console.log(`name:${name} \n number:${number}\n email:${email} \n id:${id}`);

    try {
        const result = await homeschema.updateOne(
            { _id: id }, // Specify the filter condition to find the document to update
            { $set: { name: name, number: number, email: email, password: password } }
        );

        console.log(result);
        res.send("Update successful");
    } catch (error) {
        console.error("Error:", error);
        res.status(500).send("Error updating data")
    }
});
router.post("/delete", async (req,res)=>{
    
    const  userId   = req.body.userId ;
    console.log("Received userId:", userId );
    const user = await homeschema.deleteOne({_id:userId});
    
    res.send(user);
});


module.exports=router;