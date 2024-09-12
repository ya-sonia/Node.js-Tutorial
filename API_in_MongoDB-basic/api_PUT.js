const express=require('express');
const dbConnect=require('./mongoFile');
const app=express();

app.use(express.json());

app.get('/', async(req,resp)=>{
   let data = await dbConnect();
   data = await data.find().toArray();
   
   resp.send(data)   // **********   run it in chrome and postman
});

app.post('/', async(req,resp)=>{
    let data=await dbConnect();
    let result=await data.insertOne(req.body)

    resp.send(result)
});


//app.put("/",(req,resp)=>{
  //  resp.send({result:"updated"})
//})




//app.put("/",(req,resp)=>{
  //  console.log(req.body)
//    resp.send({result:"updated"})
//})




//app.put("/", async(req,resp)=>{
  // let data =await dbConnect();
   //let result = data.updateMany(
    //{name:"tanu"},{
      //  $set:{age:101}
    //}
   //)
    //resp.send({result:"updated"})
//})






// to update dynamically

//app.put("/", async(req,resp)=>{
  //  let data =await dbConnect();
    //let result = data.updateMany(
    // {name:"tanu"},{
      //   $set:req.body
     //}
    //)
     //resp.send({result:"updated"})
 //})





 //app.put("/", async(req,resp)=>{
   // let data =await dbConnect();
    //let result = data.updateMany(
     //{name:req.body.name},{
       //  $set:req.body
     //}
    //)
     //resp.send({result:"updated"})
 //})
 


 app.put("/:xyz", async(req,resp)=>{
    let data =await dbConnect();
    let result = data.updateMany(
     {name:req.params.xyz},{
         $set:req.body                                                                       
          }
    )
     resp.send({result:"updated data"})
 })
app.listen(2000);


//---> output is :  http://localhost:2000/apple   (in this way write in postman)
//{
         //"name":"sonia",  (select body then raw and then json and type data in postman)
           //"age":90 }

   // and see the updated data in mongodb compass        


