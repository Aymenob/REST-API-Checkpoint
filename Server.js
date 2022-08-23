const mongoose=require("mongoose")
const express=require("express")
const app=express()
const router=require("./Routes/routes")
require("dotenv").config({path:"./Config/.env"})
const URL=process.env.URL
const PORT=process.env.PORT
app.set('json spaces', 2)
app.use(router)
app.listen(PORT,()=>{console.log("server is running")})
mongoose.connect(URL)

