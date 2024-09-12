//const express=require('express');
//const app=express();
//const reqFilter=(req,resp,next)=>{
   // console.log('reqFilter');
    //next();
//}

//app.use(reqFilter)
//app.get('/middleHome',(req,resp)=>{
  //  resp.send('welcome to home page!!! ....')
//});

//app.get('/middleAbout',(req,resp)=>{
  //  resp.send('welcome to about page')
//});
//app.listen(4000);



const express=require('express');
const app=express();
const reqFilter=(req,resp,next)=>{
    if(!req.query.age)
    {
        resp.send("please provide age");
    }
    else if (req.query.age<18){
        resp.send("you cannot access this page");
    }
    else{   next();}
}

app.use(reqFilter)
app.get('/',(req,resp)=>{
    resp.send('welcome to home page!!! ....')
});

app.get('/middleAbout',(req,resp)=>{
    resp.send('welcome to about page')
});
app.listen(2000);
