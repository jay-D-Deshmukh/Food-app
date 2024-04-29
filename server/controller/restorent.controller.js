import Restorent from "../model/restorent.mode.js";

export const addReatorent =async (req, res)=>{
         const data = req.body;
    try {
         const setdata = await Restorent.create(data)
         res.send(res.status(200).json(setdata))
         
         
    } catch (error) {

        console.log(res.status(404).json({message: error.message}))

        
        
    }

}