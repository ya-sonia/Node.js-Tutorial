const express=require('express');
require('./config');
const infor=require('./informations');
const app=express();
app.use(express.json());

app.post("/create",async(req,resp)=>{
    let data = new infor(req.body);
    const result=await data.save();
    
    resp.send(result);
}) ;


app.get("/list",async(req,resp)=>{
    let data=await infor.find();
    resp.send(data)
});


//app.delete("/delete/:id",async(req,resp)=>{
   // console.log(req.params)
   // resp.send("done");
//})

app.delete("/delete/:_id",async(req,resp)=>{
    console.log(req.params)
    let data=await infor.deleteOne(req.params);
    resp.send(data);
})
app.listen(8000);