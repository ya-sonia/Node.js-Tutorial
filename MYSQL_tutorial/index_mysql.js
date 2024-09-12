const mysql=require("mysql");

const con=mysql.createConnection({
    host:'localhost',
    user:"root",
    password:"",
    database:"soniadb"
});
con.connect((err)=>{
    if(err)
    {
        console.warn("error ")
    }
    else{
        console.warn("it is connected")
    }
});

con.query("select * from employee",(err,result)=>{
    console.warn("result is:",result)
})




//cd MYSQL_tutorial
// nodemon .\getApi.js