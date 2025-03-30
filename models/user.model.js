import mongoose, { Schema } from "mongoose";

//here the login details  and the details of the user is defined

const userschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:[true,"user name is required"],
            unique:true,
            trim:true,
            maxLength:50
        },
        password:{
            type:String,
            required:[true,"please enter a valid password"],
            minLength:6,
        },
        email:{
            type:String,
            required:[true,"enter your email"],
            unique:true,
            trim:true,
            lowercase:true,
            match: [/^\S+@\S+\.\S+$/, "Invalid email format"]

        }
    },{timestamps:true}
);

const  user = mongoose.model("user",userschema);
export default  user;