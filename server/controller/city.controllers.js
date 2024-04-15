
import cityNames from "../model/city.model.js";

 const getAllCities = async (req, res) => {
    try {
      // Fetch all cities from the database
      const cities = await cityNames.find();
  
      // Send the cities data as a response
      res.json(cities);
    } catch (error) {
      console.error('Error fetching cities:', error);
      // Send an error response if something goes wrong
      res.status(500).json({ error: 'Server error' });
    }
  };

export default getAllCities;