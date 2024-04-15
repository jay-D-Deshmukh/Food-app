import { Schema, model } from "mongoose";

const CitySchema = new Schema({
    id:{
        type:String,
        required:true,
        
       

    },
    name:{
        type:String,
        required:true,
       
    },
    state:{
        type: String,
        required: true
       
        
    },
    
})

CitySchema.set('timestamps', true); 

const cityNames = model("cityNames", CitySchema);
export default cityNames;