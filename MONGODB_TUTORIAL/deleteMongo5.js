//const dbConnect=require('./mongodbFile');
//const deleteData= async()=>{
  //  let data = await dbConnect();
    // let result= await data . deleteOne(
      //  {name:'tanu'}
     //);
     //console.warn(result);

//}
//deleteData();


const dbConnect=require('./mongodbFile');
const deleteData= async()=>{
    let data = await dbConnect();
     let result= await data . deleteMany(
        {name:"Sham"}
     );
     console.warn(result);
     if(result.acknowledged){
        console.log("result is deleted from the database");
     }

}
deleteData();