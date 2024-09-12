const express=require('express');
const app=express();

app.get('' , (req,resp)=>{
    console.log("data sent by browser:",req.query.name);
    resp.send('hello, this is home page');
});

//  or it can be sent
//        app.get('' , (req,resp)=>{
  //       console.log("data sent by browser:",req.query.name);
    //     resp.send('hello, this is home page'  + req.query.name);
//          });

app.get('/about' , (req,resp)=>{
    resp.send('hello, this is about page');
});
app.listen(3000);