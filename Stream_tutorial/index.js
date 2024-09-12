const fs=require("fs");
const http=require("http");
const server=http.createServer();


//-----> one way

//server.on("request",(req,res)=>{
   // fs.readFile("input.txt", (err,data)=>{
     //   if(err) return console.error(err);
     //   res.end(data.toString());
   // });
//});



//----> second way

//server.on("request",(req,res)=>{
//const rstream=fs.createReadStream("input.txt");

//rstream.on('data', (chunkdata)=>{
  //  res.write(chunkdata);
//});
//rstream.on('end',()=>{
  //  res.end();
//});
//rstream.on('error', (err)=>{
  //  console.log(err);
    //res.end("file is not found");
//})
//});



//--->  third way  (stream pipes)
server.on("request",(req,res)=>{
    const rstream=fs.createReadStream("input.txt");
    rstream.pipe(res);
});


server.listen(9000,"127.0.0.1");