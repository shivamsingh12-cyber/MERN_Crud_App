import mongoose from "mongoose";

const mongoUrl = "mongodb://localhost:27017/test";

const connectDB =  () => {
         mongoose.connect(mongoUrl).then(()=>console.log('You are connected to DB')).catch((err)=>console.log(err)); 
};

export default connectDB;

