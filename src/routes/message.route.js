import express from "express";

const router=express.Router();

router.get("/send",(req,res)=>{
    res.send("send message endpoint");
})

router.get("/get",(req,res)=>{
    res.send("get message endpoint");
})

router.get("/greet",(req,res)=>{
    res.send("good morning");
})

router.get("/hello",(req,res)=>{
    res.send("hello harsh");
})
export default router;