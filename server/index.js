import express from "express";
const app = express();
const port = 3000;


app.all("/",(req,res)=>{
   res.send("page not fount")
})

app.listen(port,()=>{
    console.log(`server is running on port ${port}`)
})