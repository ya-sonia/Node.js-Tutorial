   // test the code for analysis


const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        await mongoose.connect("mongodb://localhost:27017/studentDetails", {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Connected to MongoDB");
    } catch (err) {
        console.error("Could not connect to MongoDB", err);
    }
};

const inforSchema = new mongoose.Schema({
    name: String,
    age: Number,
    class: String,
    mail_id: String
});

const main = async () => {
    await connectDB();
    
    const inforModel = mongoose.model('information', inforSchema);
    let data = new inforModel({
        name: "vinay",
        age: 20,
        class: "metall",
        mail_id: "vinay@gmail.com"
    });

    try {
        const result = await data.save();
        console.log(result);
    } catch (err) {
        console.error("Error saving data", err);
    } finally {
        mongoose.connection.close();
    }
};

main();
