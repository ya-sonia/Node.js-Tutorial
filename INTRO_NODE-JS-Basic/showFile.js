//const fs=require('fs');
//fs.writeFileSync('sonia.txt','this is sonia file');

const fs=require('fs');
const path=require('path');
const dirPath=path.join(__dirname,'files');
console.warn(dirPath)

//for(i=0;i<5;i++)
//{
  //  fs.writeFileSync(dirPath+ "/ritu"+i+"  .txt" , "a simple file");
//}

//fs.readdir(dirPath,(err,items)=>{
  //  console.warn(items);
//})


   //     read a file and list it
   //fs.readdir(dirPath,(err,item)=>{
    //item.forEach((item) => {
      //  console.log("file name is:",item)
        
    //});
    
//})

   //update file
  const filePath=`${dirPath}/apple.txt`;
//fs.appendFile(filePath,'and file name is apple.txt',(err)=>{
  //  if(!err)  console.log("file is updated")
//})

  // rename a  file
    fs.rename(filePath,   `${dirPath}/fruits.txt`,(err)=>{
        if(!err)  console.log("file  name is updated")
    })