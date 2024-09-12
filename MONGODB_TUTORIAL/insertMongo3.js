//const dbConnect=require('./mongodbFile');
//const insert=()=>{
  //  console.log("insert function");
//}
//insert();





//const dbConnect=require('./mongodbFile');
//const insert=()=>{
  //  const db=dbConnect();
    //console.log(db);
//}
//insert();






//const dbConnect=require('./mongodbFile');
//const insert= async()=>{
  //  const db= await dbConnect();
    //console.log(db);
//}
//insert();





//const dbConnect=require('./mongodbFile');
//const Insertdb= async()=>{
  //  const db= await dbConnect();
    //const result= await  db.insertOne(
      //  { name:'abc', age:20, class:'it'}
    //);
    //console.log(result);
//}
//Insertdb();





//const dbConnect=require('./mongodbFile');
//const Insertdb= async()=>{
  //  const db= await dbConnect();
   // const result= await  db.insertOne(
     //   { name:'abc', age:20, class:'it'}
    //);
    
      //if (result.acknowledged)
      //{
        //      console.log('data is inserted');
      //}  
//}
//Insertdb();




const dbConnect=require('./mongodbFile');
const Insertdb= async()=>{
    const db= await dbConnect();
    const result= await  db.insertMany([
      { name:'ram', age:20, class:'it'},
      { name:'sham', age:24, class:'cse'},
      { name:'manu', age:23, class:'ece'}
    ]
        
    );
    
      if (result.acknowledged)
      {
              console.log('data is inserted');
      }  
}
Insertdb();


