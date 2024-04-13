import express from "express";
import cors from "cors";
import userRoutes from './routes/user.routes.js'
import  DbConnection  from "./config/connectTodataBase.js";

import { config } from "dotenv";
config();

const app = express();


app.use(cors())
app.use(express.json());

app.use("/api/user",userRoutes)

app.all("*",(req,res)=>{
   res.send("page not fount")
})



app.listen(process.env.PORT || 5000 , async()=>{
    await DbConnection(process.env.DATABASE_URL)
    console.log(`server is running on port http://localhost:${process.env.PORT }`)
})