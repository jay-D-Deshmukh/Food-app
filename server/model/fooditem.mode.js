import { Schema, model } from "mongoose";

const FoodItem = new Schema({
    id:{
        type:String,
        required:true,
        },
    name:{
        type:String,
        required:true,
       
    },
    image:{
        type: String,
        required: true
        
    },
    
    price:{
        type:String,
        requir:true
    },
    description:{

        type:String,
        required:true
    }
    
})

FoodItem.set('timestamps', true); 

const foodItem = model("foodItem", FoodItem);
export default foodItem;