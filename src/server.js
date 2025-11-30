import express from "express";
import dotenv from "dotenv";
import authRoute from "./routes/auth.route.js";
import messagesRoutes from "./routes/message.route.js";
import path from "path"
dotenv.config();

const app=express();

const __dirname=path.resolve();

const PORT=process.env.PORT ||3000;

app.use("/api/auth",authRoute);
app.use("/api/messages",messagesRoutes);

//make redy for deployment
if(process.env.NODE_ENV==="production"){
    app.use(express.static(path.join(__dirname,"../Frontend/dist")))

    app.get("APP",(_,res)=>{
        res.sendFile(path.join(__dirname,"../Frontend","dist","index.html"))
    })
}
app.listen(PORT,()=>console.log("serer is listinig at : "+PORT))