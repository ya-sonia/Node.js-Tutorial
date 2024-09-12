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
})
app.listen(6000);