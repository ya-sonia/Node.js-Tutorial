const dbConnect=require('./mongoFile');

const main =async()=>{
    let data=await dbConnect();
    data=await data.find({name:'Rohan'}).toArray();
    console.warn(data);
}
main();