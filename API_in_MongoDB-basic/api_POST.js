const express=require('express');
const dbConnect=require('./mongoFile');
const app=express();

app.use(express.json());

app.get('/', async(req,resp)=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   
   resp.send(data)   // **********   run it in chrome and postman
});



//app.post('/',(req,resp)=>{
  //resp.send({name:'sonia yadav'})
  //})





//app.post('/',(req,resp)=>{
    //console.log(req.body)  // we get output in nodejs i.e from postman data is start coming
    //resp.send({name:'sonia yadav'})
    
//})



//app.post('/',(req,resp)=>{
  //console.log(req.body)  // we get output in nodejs
  //resp.send(req.body)
  
//})




 // ---------->to get this data in mongodb
 
app.post('/', async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertOne(req.body)

    resp.send(result)
})


app.listen(9000);
