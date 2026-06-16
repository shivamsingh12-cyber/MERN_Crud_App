import express from "express";
import dotenv from "dotenv";
import connectDB from "./connectDB.js";
import route from "./Routes/route.js";
import cors from "cors"

dotenv.config();

const app=express();
const PORT = process.env.PORT || 3000;

app.use(express.urlencoded({extended:true}));
app.use(express.json()) 
app.use("/",route);
app.use(cors())


connectDB();




app.listen(PORT,() => {
  console.log(`Your app is running on PORT ${PORT}`);
});


