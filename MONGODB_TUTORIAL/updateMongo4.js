//const dbConnect=require('./mongodbFile');
//const updateData=()=>{
  //  let data =dbConnect();
    //console.warn(data);              -------->it returns promise so to solve it we write the below code
//}
//updateData();



//const dbConnect=require('./mongodbFile');
//const updateData= async()=>{
  //  let data = await dbConnect();
    //console.warn(data);      --------> it returns the database
//}
//updateData();





//const dbConnect=require('./mongodbFile');
//const updateData= async()=>{
  //  let data = await dbConnect();
    // let result= await data.updateOne(
      //  {name:'abc'},{
        //    $set:{name:'tanu'}
        //}
     //);
     //console.warn(result);

//}
//updateData();




const dbConnect=require('./mongodbFile');
const updateData= async()=>{
    let data = await dbConnect();
     let result= await data.updateMany(
        {name:'abc'},{
            $set:{name:'tanu'}
        }
     );
     console.warn(result);

}
updateData();