import mongoose from "mongoose"
const DbConnection = async(url)=>{
  try {
        const {connection } = await mongoose.connect(url) 

        if(connection){
            console.log(`Database connected at ${url}`);
        }
 
  } catch (error) {
    console.log("Error atconnection to Database",error);
  }
}

export default DbConnection