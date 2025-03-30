import mongoose from "mongoose";
import user from "../models/user.model.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";
import { JWT_EXPIRE, JWT_SECRET } from "../config/env.js";

export const signupuser = async (req, res, next) => {
    const session = await mongoose.startSession();
    session.startTransaction();
    try {
      const { username, email, password } = req.body;
  
      console.log("The username:", username);
      console.log("The email:", email);
  
      if (!username || !email || !password) {
        throw new Error("Credentials are not defined");
      }
  
      const existinguser = await user.findOne({ email });
      console.log("Existing user:", existinguser);
  
      if (existinguser) {
        throw new Error("The user already exists");
      }
  
      const bcryptedpass = await bcrypt.hash(password, 10);
      console.log("Hashed password:", bcryptedpass);
  
      const newuser = await user.create(
        [{ name: username, email, password: bcryptedpass }], // ✅ Corrected
        { session }
      );
      console.log("New user:", newuser);
  
      const token = jwt.sign({ userid: newuser[0]._id }, JWT_SECRET, { expiresIn: JWT_EXPIRE });
  
      await session.commitTransaction();
      session.endSession();
  
      res.status(201).json({
        success: true,
        message: "The user is created successfully",
        user: newuser[0],
        token,
      });
  
    } catch (error) {
      await session.abortTransaction();
      session.endSession();
      console.error("Error during signup:", error.message);
      res.status(400).json({ success: false, message: error.message });
    }
  };

  
// sign in logic

export const signin = async(req,res,next)=>{
  try{
    const {email,password} = req.body;
    const signinuser = await user.findOne({email});
    if(!signinuser){
      //res.send("user not found");
      const error = new Error("user not found");
      throw error;
    };

    // compare the password
    const passwordcheck = await bcrypt.compare(password,signinuser.password);

    if(!passwordcheck){

      const error = new Error("password is not correct");
      throw error;

    }

    const token = jwt.sign({userid:signinuser._id},JWT_SECRET,{expiresIn:JWT_EXPIRE});
    res.status(201).json({
      success: true,
      message: "The user is signed in successfully",
      token,
    });
  }catch(error){
    console.error("try again please",error);
    next();
  }

}


// sign out
  