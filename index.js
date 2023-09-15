const express = require("express");
const db = require("./database")
const bodyparser = require("body-parser");
const app = express();
const port = process.env.PORT || 4000;

const homeRouter =require("./routers/homeRouters");
const admindash =require("./routers/admindashRouters");

app.set("view engine","ejs");

app.use(express.static('public'));
// parse application/x-www-form-urlencoded (midelware)
app.use(bodyparser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyparser.json());
/////// db connact
db.on("error",()=>{console.log("error in conection");})
db.once('open',()=>{console.log("Connected");})



app.use('/',homeRouter);

app.use('/admin',admindash);





app.listen(port,()=>{
    console.log(`running on ${port}`);
})
