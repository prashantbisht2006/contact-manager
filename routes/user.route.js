import { Router } from "express";
import { getuser,getusers } from "../controller/user.controller.js";
import authorize from "../middleware/auth.middleware.js";

const userdetails = Router();

userdetails.get("/",getusers);

userdetails.get("/:id",authorize,getuser);

userdetails.post('/',(req,res)=>{
    res.json({title:"create the new user"});
});

userdetails.put("/",(req,res)=>{
    res.json({title:"edit the detail of the contact "})
});

userdetails.delete("/",(req,res)=>{
    res.json({title:"delete the conatct"})
});

export default userdetails;


//  this  route is basicaly for getting the user details not any of the contact details
