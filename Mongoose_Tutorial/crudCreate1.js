const mongoose=require('mongoose');
 mongoose.connect("mongodb://localhost:27017/studentDetails");

 const inforSchema=new mongoose.Schema({
    name:String,
    age:Number,
    class:String,
    mail_id:String

 });

 const main=async()=>{   
 const inforModel=mongoose.model('information', inforSchema);
 let data =new inforModel({
    name:"vinay",
    age:200,
    class:"metall",
    mail_id:"vinay@gmail.com"

 });

 const  result=await data.save();
 console.log(result);

}  

                                                  

main();