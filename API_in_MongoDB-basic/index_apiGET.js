// How to run it 
//       PS F:\nodeSonia> cd API_in_MongoDB-basic
//       PS F:\nodeSonia\API_in_MongoDB-basic> nodemon .\index_apiGET.js



//const express=require('express');
//const dbConnect=require('./mongoFile');
//const app=express();

//app.get('/',(req,resp)=>{
  //  resp.send({name:'sonia'})
//});
//app.listen(5000);



//const express=require('express');
//const dbConnect=require('./mongoFile');
//const app=express();

//app.get('/', async(req,resp)=>{
  // let data = await dbConnect();
   //data = await data.find().toArray();
   //console.log(data);
   //resp.send({name:'sonia'})
//});
//app.listen(5000);



const express=require('express');
const dbConnect=require('./mongoFile');
const app=express();

app.get('/', async(req,resp)=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   console.log(data);
   resp.send(data)   // **********   run it in chrome and postman
});
app.listen(5000);
