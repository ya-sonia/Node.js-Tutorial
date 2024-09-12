const express=require("express");
const app =express();

//app.get("/",(req,resp)=>{
  //  resp.send("it is done !!!!!!");
//});

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
app.listen(3000);