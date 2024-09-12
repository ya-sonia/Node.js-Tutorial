const express=require('express');
const app=express();
const reqFilter=require('./middleware')     // see the middleware.js file for code analysis
const route=express.Router();   //*************  here, we give route name as an instance
route.use(reqFilter);  //*** 

app.get('/',(req,resp)=>{
    resp.send('welcome to home page!!! ....')
});

app.get('/middleAbout',    (req,resp)=>{                
    resp.send('welcome to about page')
});

route.get('/middleContact',   (req,resp)=> {            // here , only middleware is apply               
    resp.send('welcome to contact page')
});

route.get('/middleHelp',    (req,resp)=>{            // here , only middleware is apply        
    resp.send('welcome to help page')
});

app.use('/',route);   //*****
app.listen(2000);