import mongoose from "mongoose";

import { DB_URI } from "../config/env.js";
const connectdatabase = async(req,res)=>{
    try{ 
         await mongoose.connect(DB_URI);
        console.log("database is connected");
        
    }
    catch(error)
    {
    console.error(error)
    }
};
export default connectdatabase;