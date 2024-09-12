const app=require('./app')


console.log("mango");
var a=2;
var b=2;
var c=2;
console.warn(a+b+c);
console.log(app);


const arr=[1,3,4,2,4,2,8];
arr.filter((item)=>{
    console.log(item)
  
})
console.log(app.x);

const fs=require('fs');
fs.writeFileSync("hello.txt","sonia yadav is cute girl");

const ritu=require('fs').writeFileSync;
ritu("xyz.txt","ritu yadav is good");

