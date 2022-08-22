var mongoose=require("mongoose")
var express=require("express")
var app=express()
var router=require("./Routes/routes")
app.set('json spaces', 2)
app.use(router)
app.listen(8081,()=>{console.log("server is running")})
mongoose.connect("mongodb+srv://aymenob:aymenrule10@users.uk8lyen.mongodb.net/?retryWrites=true&w=majority")

