const mongoose = require("mongoose");

const url= "mongodb+srv://Mahanya1117:Mahanya1117@cluster0.ujzbn.mongodb.net/login-system?retryWrites=true&w=majority&appName=Cluster0";
const connectDB = async ()=>{
    try{
        const con = await mongoose.connect(url);
        console.log(`MongoDB connected: ${con.connection.host}`);
        
    }
    catch(error){
         console.log(error);
         
    }
};

module.exports =connectDB
