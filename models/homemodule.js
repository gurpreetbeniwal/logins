const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userschema = new schema({
    name: { 
            type:String,
            required:[true,'Name is Required']
        },
    number:{
            type:Number,
            required:[true,'Number is Required']
        },
    email:{
            type : String ,
            unique: true ,
            required:[true,'email is Required']
    },
    password:{
            type:String,
            required:[true,'passward is Required']
    }
});
 login=mongoose.model('login',userschema)
module.exports= login;