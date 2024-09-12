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


app.post("/",(req,resp)=>{
   const data=req.body;// Get data from the request body
   con.query('INsert INTO employee SET?' , data, (error,result,fields)=>{
       if (error) throw  error;
                resp.send(result);
    })
});

app.use(express.json());

app.put("/:EmpID",(req,resp)=>{
    const data=[req.params.EmpName, req.params.EmpAge, req.params.EmpID];
    con.query("UPDATE employee SET EmpName= ? , EmpAge=? where  EmpID= ?" , data, (err,result,fields)=>{
        if (err) throw  err;
        resp.send(result);
    });
  
})


//app.delete("/:EmpID", (req,resp)=>{
  //  resp.send( req.params.EmpID)// to check whether we get id or not
//})



app.delete("/:EmpID", (req,resp)=>{
    con.query("DELETE FROM employee WHERE EmpID =" + req.params.EmpID , (error ,result , fields ) =>{
        if (error) throw  err;
        resp.send(result);

    });
  
});
app.listen(7000);
