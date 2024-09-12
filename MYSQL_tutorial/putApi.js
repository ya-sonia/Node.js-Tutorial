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

//app.put("/",(req,resp)=>{
  //  resp.send("update api ")
//})


//static update data 
//app.put("/",(req,resp)=>{
  //  const data=["sunny", '65' ,10];
    //con.query("UPDATE employee SET EmpName= ? , EmpAge=? where  EmpID= ?" , data, (err,result,fields)=>{
      //  if (err) throw  err;
        //resp.send(result);
    //});
  
//})



// dynamic update data

app.use(express.json());

app.put("/:EmpID",(req,resp)=>{
    const data=[req.params.EmpName, req.params.EmpAge, req.params.EmpID];
    con.query("UPDATE employee SET EmpName= ? , EmpAge=? where  EmpID= ?" , data, (err,result,fields)=>{
        if (err) throw  err;
        resp.send(result);
    });
  
})
app.listen(7000);
