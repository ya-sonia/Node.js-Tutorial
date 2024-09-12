const  { MongoClient}=require('mongodb');
// (or)  const  MongoClient=require('mongodb'). MongoClient;
const url ='mongodb://localhost:27017';
const database ='studentDetails';
const client =new  MongoClient(url);
async function getData(){
    let result = await client.connect();
    let db =result .db(database);
    let collection=db.collection('information');
    // console.log(collection.find({}).toArray());
    let response =await collection.find({ _id:25}).toArray();
    console.log(response);
}
getData();