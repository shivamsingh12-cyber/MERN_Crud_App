import mongoose from "mongoose";

const schema=new mongoose.Schema({
    name:{
        type: String,
        required:true
    },
    age:{
        type:Number,
        required:true
    },
    gender:{
        type:String,
        enum:["male","female"]
    }
})
const User=mongoose.model('User',schema);
export default User;
