const mongoose=require("mongoose");

//create Schema
const userSchema=new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },
    email:{
        type:String,
        unique:true,
        require:true,
    },
    age:{
        type:Number,
    },
});

//create model
const User=mongoose.model('User',userSchema)
module.exports=User;