const express=require('express');
require('./config');
const infor=require('./informations');
const app=express();
app.use(express.json());






//app.post("/create",(req,resp)=>{
  //  console.log(req.body);
    //resp.send("it is done !!!!!!");
//})                                                             // <output:---> [nodemon] starting `node .\index_postAPI.js`

                                                                       //     { name: 'shree Ram', age: 35 }   ---> at the terminal

//app.listen(4000);




// now insert data to mongodb compass  , connect to database
app.post("/create",async(req,resp)=>{
    let data = new infor(req.body);
    let result=await data.save();
    console.log(result);
    resp.send(result);
}) ;
app.listen(3000);