const express=require('express');
const app=express();
const reqFilter=(req,resp,next)=>{   // here , reqFilter is our middleware
    if(!req.query.age)
    {
        resp.send("please provide age");
    }
    else if (req.query.age<18){
        resp.send("you cannot access this page");
    }
    else{   next();}
}


app.get('/',(req,resp)=>{
    resp.send('welcome to home page!!! ....')
});

app.get('/middleAbout',    reqFilter,(req,resp)=>{                // single router    , here for about page only middleware will works
    resp.send('welcome to about page')
});
app.listen(2000);
