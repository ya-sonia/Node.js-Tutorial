// making an simple API 



const http =require("http");
const fs=require("fs");
const path = require('path');
const filePath = path.join(__dirname,'UserAPI');
console.log(filePath)
const file=`${filePath}/userapi.json`;
console.log(file);

const server=http.createServer((req,res)=>{




   const data = fs.readFileSync(file, "utf-8");
        const objData=JSON.parse(data);




if(req.url=="/"){  res.end("hello home");}
 else if(req.url=="/about"){  res.end("hello about");}
 else if(req.url=="/contact"){  res.end("hello contact");}

 //else if(req.url=="/userapi"){  res.end("hello userapi ");}


 //else if(req.url=="/userapi"){ 
  //  fs.readFile(file, "utf-8", (err,data)=>{
    //       console.log(data);
   // });
    //res.end("hello userapi ");}


    else if(req.url=="/userapi"){ 
       fs.readFile(file, "utf-8", (err,data)=>{
               console.log(data);
              res.end(data);
       });
     }


     //else if(req.url=="/userapi"){ 
       // fs.readFile(file, "utf-8", (err,data)=>{
         //      console.log(data);
           //    const objData=JSON.parse(data);    // -----> it gives me error
             //  res.end(objData[1].name);
        //});
      //}



      // now when i visit at first time on my website it should be only first time called and after that automatic data can be fetch  so use Synchronous way:  
      //else if(req.url=="/userapi"){
        //res.writeHead(200,{"content-type": " application/json"}); // when we work with json so we use writeHead
          //     res.end(objData[1].name);
      //}

 else{
    res.writeHead(404,{"Content-type":"text/html"});
    res.end("<h1> 404 error page </h1>");
 }

});
server.listen(3000,"127.0.0.1", ()=>{
    console.log("listening to port 3000");
});