const express=require('express');
const multer=require('multer');
const app=express();

//app.post("/upload",(req,resp)=>{
 //   resp.send("file is uploaded")
//});




const upload=multer({
    storage:multer.diskStorage({
        destination:function(req,file,cb)
        {
            cb(null,"uploadFolder")
        },
        filename:function(req,file,cb)   // where cb is callback function
        {
            cb(null,file.filename + "_" + Date.now() + ".jpg")
        }
    })
}).single("user_file");
app.post("/upload", upload,(req,resp)=>{
    resp.send("file is uploaded")
});
app.listen(4000);