//const express=require('express');
//const app = express();
//app.listen(3000,()=>{
  //  console.log('listening on port 3000');
//});

 
 
 //const express=require('express');
 //const app=express();
 //const PORT=process.env.PORT || 3000;
 //app.listen(PORT,()=>{
   // console.log(`listening on port ${ PORT}`);
 //});



                                           //    THIS CODE IS JUST FOR UNDERSTANDING
 const express=require('express');
 const path =require=('path');
 const app=express();
 const PORT=process.env.PORT || 5000;

 app.use(express.static('public'));  // static middleware and public is a folder

 //app.set('view engine','ejs');
 //console.log(app.get('view engine'));
 //console.log(app.get('views'));
 //app.set('views','soniaViews');
 //console.log(app.get('views'));

 app.get('/' ,(req,resp)=>{
    resp.send(' <h1> welcome to home page </h1>');
 });
 app.get('/about' ,(req,resp)=>{
    resp.sendFile(path.resolve(__dirname) + '/about.html');
 });
 app.get('/help' ,(req,resp)=>{
    resp.sendFile(path.resolve(__dirname) + '/help.html');
 });
 app.listen(PORT,()=>console.log(`listening on port ${ PORT}`));



