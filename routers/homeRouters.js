
const express = require("express");
const router =express.Router();
const homeschema =require("../models/homemodule");


router.get("/",(req,res)=>{
    res.render('signup',{title:''});
});
router.post("/register",async(req,res)=>{
         
    const  {
        name,number,email,password,cpassword
    } = req.body;
    ////creata an object
    let user ={
        name:name,
        number:number,
        email:email,
        password:password
    }
       if(name===""||number===""||email===""||password===""){
        res.render('signup',{title:"try again"});
       }

       const useremail = await homeschema.findOne({ email: email });
       if (useremail) {
        console.log("Email already registered")
         res.render('signup', { title: "Email already registered" });
       }
       
       if (password !== cpassword) {
        console.log("Passwords don't match")
         res.render('signup', { title: "Passwords don't match" });
       } else {
         try {
           const userdata = new homeschema(user);
           await userdata.save();
           console.log("Account Created !! You can log in now")
           res.render('signup', { title: "Account Created !! You can log in now" });
         } catch (error) {
           res.render('signup', { title: "Server error" });
         }
       }
     });

router.post('/login', async (req,res)=>{
    
    const {
        email,
        password    
    } = req.body;
     const user = await homeschema.findOne({email:email});
     if(user!==null){
        if(email === user.email && password === user.password ){
          console.log("login now")
            res.render('dashbord',{name:user.name,email:user.email,number:user.number})
        }else{
            res.render('signup',{title:"Wrong passward"});
            console.log("Wrong passward")
        }
      }
      else{
        res.render('signup',{title:"No such account found"});
      }
})

//
router.get("/logout", (req, res) => {
  console.log("logout now")
    res.render('signup', { title: "log out" });
  });


//
//
//
router.get("/alldata", async (req, res) => {
    try {
      const biosData = await homeschema.find({}); // Retrieve all documents in the "bios" collection
      res.json(biosData);
    } catch (error) {
      res.status(500).json({ message: 'Error retrieving data', error });
    }
  });


module.exports=router;
