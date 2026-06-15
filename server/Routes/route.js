import express from "express";
import User from "../models/mongoDb.js";
import { get } from "mongoose";

const router=express.Router();
router.get('/',(req,res)=>res.status(200).send('Your app is running'));

router.post("/add",async (req,res)=>{
try {
    const data=req.body;
    const saveUser=new User(data);
    const getUser= await saveUser.save();
    res.status(201).json(getUser);
} catch (error) {
    res.status(500).send("Internal Server error!");
    console.log(error)
}
});

export default router;