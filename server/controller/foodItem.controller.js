import foodItem from "../model/fooditem.mode.js";

export const getFoodItems = async (req ,res)=>{
   
    try {
        // Fetch all cities from the database
        const data = await foodItem.find();
    
        // Send the cities data as a response
        res.json(data);
      } catch (error) {
        console.error('Error fetching cities:', error);
        // Send an error response if something goes wrong
        res.status(500).json({ error: 'Server error' });
      }
}