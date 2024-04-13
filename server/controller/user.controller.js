import bcrypt from "bcrypt"
import User from "../model/user.mode.js";

export const register = async(req,res)=>{
    try {
        const userdata = req.body;
        const salt = parseInt(process.env.SALT);
        if (isNaN(salt)) {
          throw new Error('SALT environment variable is not set or invalid');
        }
        userdata.password = await bcrypt.hash(userdata.password, salt);
        const data = await User.create(userdata);
        res.status(200).send({ success: true, message: "User created successfully" });
      } catch (error) {
        console.error("Error in registerUser:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
      }

   
}

export const login = async(req,res)=>{

    try {
        const { email, password } = req.body;
        const UserData = await User.findOne({ email: email.toLowerCase() }).select(
          "+password"
        );
        if (!UserData) {
          res.status(401).send({ status: false, message: "Invalid Email" });
          return;
        }
        if (!bcrypt.compare(password, UserData.password)) {
          res.status(401).send({ status: false, message: "Invalid Password" });
          return;
        }
    
        
    
        res.status(200).send({ status: true, message: "Successfully logged in" });
      } catch (error) {
        console.error("Error in loginUser:", error);
        res.status(500).send({ success: false, message: "Internal Server Error" });
      }

}