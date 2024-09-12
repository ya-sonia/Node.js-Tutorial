const mongoose=require('mongoose');
const main=async()=>{
 await mongoose.connect("mongodb://localhost:27017/studentDetails");

 const inforSchema=new mongoose.Schema({
   name:String
   

});
 const inforModel=mongoose.model('information', inforSchema);
 let data =new inforModel({
    name:"vinay"
 });

 let result=await data.save();
 console.log(result);

}  
                                                  //    cd Mongoose_Tutorial    
                                                       //nodemon .\index-mongoose.js

main();