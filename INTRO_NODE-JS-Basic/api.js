 //   const http=require('http');
//    http.createServer((req,resp)=>{
 //   resp.writeHead(200,{'content-type':'application\json'});
 //   resp.write(JSON.stringify({name:'sonia yadav',email:'sonia@gmail.com'}));
 //   resp.end();

//    }).listen(5000);

const http=require('http');
const data=require('./data');
http.createServer((req,resp)=>{
    resp.writeHead(200,{'content-type':'application\json'});
   resp.write(JSON.stringify({name:'sonia yadav',email:'sonia@gmail.com'}));
  resp.end();

   }).listen(9000);