import mongoose from "mongoose";

const personSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    email:{
        type:String,
        required:true,
        unique:true,
    },
    phone:{
        type:Number,
        required:true
    },
    work:{
        type:String,
        required:true
    }
}, { timestamps: true })

const Person=mongoose.model("users",personSchema)

export default Person;