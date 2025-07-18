const mongoose =require("mongoose");
const Schema=mongoose.Schema;
const passportLocalMongo=require("passport-local-mongoose");


const userSchema=new Schema({
    email:{
        type:String,
        required:true,
    }
    
})

userSchema.plugin(passportLocalMongo);

module.exports=mongoose.model('User',userSchema);