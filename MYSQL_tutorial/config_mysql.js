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
module.exports=con;