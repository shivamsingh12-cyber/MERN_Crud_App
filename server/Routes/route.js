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

router.put("/update/:id",async (req,res)=>{
    try {
            const userId = req.params.id;
    const data=req.body;
    const updateUser=await User.findByIdAndUpdate(userId,data);
    if(!updateUser){
        res.status(404).send("Your item didn't found!");
        console.log('Your item is not found!');
    }
    res.status(201).json('Your data is updated!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
})
router.post("/delete/:id",async (req,res)=>{
    try {
            const userId = req.params.id;
    const updateUser=await User.findByIdAndDelete(userId);
    if(!updateUser){
        res.status(404).send("Your item already removed!");
        console.log('Your item already removed!');
    }
    res.status(201).json('Your data is deleted!');
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
})
router.get("/getdata/:id",async (req,res)=>{
    try {
            const userId = req.params.id;
    const updateUser=await User.findById(userId);
    if(!updateUser){
        res.status(404).send("Your item not found!");
        console.log('Your item not found!');
    }
    res.status(201).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
})

router.get("/getall",async (req,res)=>{
    try {
    const updateUser=await User.find();
    if(!updateUser){
        res.status(404).send("Your data not found!");
        console.log('Your data not found!');
    }
    res.status(201).json(updateUser);
    } catch (error) {
        console.log(error);
        res.status(500).send('Internal server error!');
    }
})


export default router;