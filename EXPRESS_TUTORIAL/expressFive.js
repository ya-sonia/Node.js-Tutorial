 const express =require('express');
const path =require('path');
const app=express();  // make it executable function
const publicPath=path.join(__dirname,'public');

app.get('' , (req,resp)=>{
    resp.sendFile(`${publicPath}/home.html`);
});
app.get('/about' , (req,resp)=>{
    resp.sendFile(`${publicPath}/about.html`);
});

app.get('/download' , (req,resp)=>{
    resp.download(`${publicPath}/about.html`);
});
app.get('*' , (req,resp)=>{
    resp.sendFile(`${publicPath}/noPage.html`);
});



app.listen(1000);