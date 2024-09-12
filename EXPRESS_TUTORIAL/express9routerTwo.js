const express=require('express');
const app=express();
const reqFilter=require('./middleware')     // see the middleware.js file for code analysis


app.get('/',(req,resp)=>{
    resp.send('welcome to home page!!! ....')
});

app.get('/middleAbout',    reqFilter,(req,resp)=>{               
    resp.send('welcome to about page')
});
app.get('/middleContact',    reqFilter,(req,resp)=>{               
    resp.send('welcome to contact page')
});
app.get('/middleHelp',    reqFilter,(req,resp)=>{               
    resp.send('welcome to help page')
});
app.listen(2000);