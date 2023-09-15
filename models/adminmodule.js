const mongoose = require("mongoose");
const schema = mongoose.Schema;
const adminschema = new schema({
    email:{
            type : String ,
            required:[true,'email is Required']
    },
    password:{
            type:String,
            required:[true,'passward is Required']
    }
});
adminlogin=mongoose.model('adminlogin',adminschema)
module.exports= adminlogin;