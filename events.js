const express=require("express");
const EventEmitter=require("events");  // class of events of name EventEmitter
const app=express();
const event=new EventEmitter();// now we create object of name event

let count=0;

event.on("countAPI", ()=>{   // here we define our event to what to do and  the user event  is always define above the emit call 
    count++;
    console.log("event is called",count)
})

app.get("/",(req,resp)=>{
    resp.send("api is called");
    event.emit("countAPI"); // to call event by emit
});
app.get("/search",(req,resp)=>{
    resp.send("search api  is called");
    event.emit("countAPI");
});
app.get("/update",(req,resp)=>{
    resp.send(" update api is called");
    event.emit("countAPI");
});

app.listen(5000);   // by using single event we can call multiple events