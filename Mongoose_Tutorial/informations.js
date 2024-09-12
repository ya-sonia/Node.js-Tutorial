const mongoose=require('mongoose');
const inforSchema=new mongoose.Schema({
    name:String,
    age:Number,
    class:String,
    mail_id:String

 });
 module.exports=mongoose.model('information', inforSchema);