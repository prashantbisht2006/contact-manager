import user from "../models/user.model.js";
import mongoose from "mongoose";

export const getusers = async(req,res,next)=>{
    try{
        const users =await user.find();

        res.json({success:true,data : users})
    }catch(error){
        console.error("error!!!")
    }
    
};

export const getuser = async(req,res,next)=>{
    try{
        if (!mongoose.Types.ObjectId.isValid(req.params.id)) {
            return res.status(400).json({ success: false, message: "Invalid user ID format" });
          }
        const userdetail = await user.findById(req.params.id).select('-password');
        console.log("user details:",userdetail)
        if(!userdetail){
           const error = new Error("user not found");
           throw error;
        }
        res.json({success:true,data:userdetail})

    }catch(error){
        console.error(error);
        next();
        
    }
};
