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


app.put("/:xyz", async(req,resp)=>{
    let data =await dbConnect();
    let result = data.updateMany(
     {name:req.params.xyz},{
         $set:req.body                                                                       
          }
    )
     resp.send({result:"updated data"})
 })


 //app.delete("/:id",(req,resp)=>{
   // console.log(req.params.id)
    //resp.send("it is done")
 //})

 

 const mongodb=require('mongodb')


 app.delete("/:id", async(req,resp)=>{
    console.log(req.params.id)
    const data=await dbConnect();
    const result=await data.deleteOne({
        _id:new mongodb.ObjectId(req.params.id)
    })
    resp.send(result)
 })
 app.listen(8000);