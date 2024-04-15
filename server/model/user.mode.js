import { Schema, model } from "mongoose";

const UserSchema = new Schema({
    userName:{
        type:String,
        required:true,
        
        trim:true,
        minlength:3

    },
    email:{
        type:String,
        required:true,
        lowercase: true,
        unique:true,
        trim:true,
        minlength:3
    },
    password:{
        type: String,
        required: [true, "Password is required"],
        minLength: [8, "Minimum length of Password should be 8"],
        maxLength: [100, "Maximum length for password exceeded"],
        select: false,
        
    },
    
})

UserSchema.set('timestamps', true); 

const User = model("User", UserSchema);
export default User;