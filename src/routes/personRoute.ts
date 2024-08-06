import express, { response } from "express"
import Person from "../models/personModel";
const router=express.Router()

//post
router.post("/",async(req,res)=>{
    try {
        const data=req.body;
        const newPerson=new Person(data)
        const response=await newPerson.save()
        res.status(200).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
})

// get

router.get("/",async(req,res)=>{
    try {
        const data=await Person.find()
        res.status(200).json(data)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
})

// put
router.put("/:id",async(req,res)=>{
    try {
        const personId=req.params.id;
        const updatePerson=req.body;
        const response=await Person.findByIdAndUpdate(personId,updatePerson,{
            new:true,
            runValidators:true,
        })
        res.status(500).json(response)
    } catch (error) {
        console.log(error);
        res.status(500).json("Internal Server Error")
    }
})

// delete
router.delete("/:id",async(req,res)=>{
    try {
        const personId=req.params.id;
        const response=await Person.findByIdAndDelete(personId)
        if(!response){
            return res.status(404).json({error:"Person not found"})
        }
        console.log('data deleted');
        res.status(200).json({message:"Person deleted successfully"})
        
    } catch (error) {
       console.log(error);
       res.status(500).json("Internal Server Error")
        
    }
})

export default router;