const express =require('express');
const path =require('path');
const app=express();  // make it executable function
const publicPath=path.join(__dirname,'public');
app.use(express.static(publicPath));   // use function -> it  load static content 
app.listen(5000);