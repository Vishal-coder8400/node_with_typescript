import express from "express";
const app=express();
import dotenv from 'dotenv'
dotenv.config()
const db=require("./config/db")
import bodyParser from "body-parser";
import router from "./routes/personRoute";

app.use(bodyParser.json())

app.get("/",(req,res)=>{
res.send("<h1>Hello all users</h1>")
})

// routes
app.use("/person",router)


const port=process.env.PORT
app.listen(port,()=>{
    console.log(`Server running on port ${port}`);
    
})