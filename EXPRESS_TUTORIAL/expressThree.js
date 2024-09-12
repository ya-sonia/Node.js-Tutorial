const express=require('express');
const app=express();

app.get('' , (req,resp)=>{
    resp.send(' <h1> hello, this is home page</h1>');
});

app.get('' , (req,resp)=>{
    resp.send(`
        <h1> hello, this is home page</h1>
        <a href="/about">  go to about page </a>


    `);
});





app.get('/about' , (req,resp)=>{
    resp.send(`
         <input type="text" placeholder="user name" />
         <button>click me </button>
          <a href="/">  go to home page </a>

        ` );
});

 //app.get("/help",(req,resp)=>{
   // resp.send({
    //email:'anil@gmail.com',
    //name:'anil'
//});
//});

app.get("/help",(req,resp)=>{
    resp.send([
        {
            name:'anil', 
            email:'anil@gmail.com' 
        },
        {
            name:'sham', 
            email:'sham@gmail.com' 
        }


    ]);
});


   // query parameter  , how to get value from parameter
app.get('/contact' , (req,resp)=>{
    resp.send(`
        <input type="text" placeholder="user name"  value= " ${ req.query.name}" />
         <button>click me </button>
          <a href="/">  go to home page </a>
        
        
        
        `);
});
app.listen(2000);