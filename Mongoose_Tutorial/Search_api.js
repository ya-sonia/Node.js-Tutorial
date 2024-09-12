const express=require('express');
require('./config');
const infor=require('./informations');
const app=express();
app.use(express.json());

//app.get("/search/:key",(req,resp)=>{
  //  resp.send("search is done");
//})

//app.get("/search/:key",async(req,resp)=>{
  //  let data=await infor.find()
    //resp.send(data);
//})



//app.get("/search/:key",async(req,resp)=>{
  //  console.log(req.params.key);
    //let data=await infor.find()
    //resp.send(data);
//})


//app.get("/search/:key",async(req,resp)=>{
  //  console.log(req.params.key);
    //let data=await infor.find(
      //  {
        //    "$or":[
          //      {"name":{$regex:req.params.key}}
            //]
        //}
    //)
    //resp.send(data);
//})

app.get("/search/:key",async(req,resp)=>{
    console.log(req.params.key);
    let data=await infor.find(
        {
            "$or":[
                {"name":{$regex:req.params.key}},
                {"class":{$regex:req.params.key}}
            ]
        }
    )
    resp.send(data);
})
app.listen(4000);
