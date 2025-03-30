import mongoose from "mongoose";
// here the detail of he contacts the user want to save is designed

const contact = new mongoose.Schema(
    {
        name:{
            type:String,
            trim:true,
            minLength:1,
            
        },
        number:{
            type:Number,
            trim:true,
            maxLength:10
        }
    },{timestamps:true}
) ;
const contacts = mongoose.model("contacts",contact);
export default contacts;