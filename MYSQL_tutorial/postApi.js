const express=require("express");
const app =express();
const con=require("./config_mysql");

app.get("/",(req,resp)=>{

    con.query("select * from employee",(err,result)=>{
        if(err)
            {
                resp.send("error");
            }
            else{
                resp.send(result);
            }  
    })
   
});



// enter static data
//app.post("/",(req,resp)=>{
   // const data={EmpName:"soniaYadav",EmpAge:20};
   // con.query('INsert INTO employee SET?' , data, (error,result,fields)=>{
      //  if (error)  error;
         //       resp.send(result);
   // })
//});


// enter dynamic data

app.use(express.json());
app.post("/",(req,resp)=>{
   const data=req.body;// Get data from the request body
   con.query('INsert INTO employee SET?' , data, (error,result,fields)=>{
       if (error)  error;
                resp.send(result);
    })
});
app.listen(6000);