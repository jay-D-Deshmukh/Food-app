import express from "express";
import cors from "cors";
import userRoutes from './routes/user.routes.js'
import cityRoutes from './routes/city.routes.js'
import  DbConnection  from "./config/connectTodataBase.js";
import  foodItemRoutes from "./routes/fooditem.routes.js"
import restorent from "./routes/restorent.routes.js";

import { config } from "dotenv";
config();

const app = express();


app.use(cors())
app.use(express.json());

app.use("/api/user",userRoutes)
app.use("/api",cityRoutes)
app.use("/api",foodItemRoutes)
app.use("/api",restorent)

app.all("*",(req,res)=>{
   res.send("page not fount")
})



app.listen(process.env.PORT || 5000 , async()=>{
    await DbConnection(process.env.DATABASE_URL)
    console.log(`server is running on port http://localhost:${process.env.PORT }`)
})