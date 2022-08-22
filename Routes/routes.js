var express=require("express")
var router=express.Router()
var User=require("../models/User")
router.use(express.json())

//Posting Many Users

router.post("/Users",function (req,res) {
  User.create(req.body,function (err,result) {
    err?console.log(err):
    res.json(result)
  })
  
})

//Posting One User

router.post("/User",function (req,res) {
  let user=new User(req.body)
  user.save(function (err,result) {
    err?console.log(err):
    res.json(result)
  })
  
})

//Find List Of Users

router.get("/",function (req,res) {
   // var newlist=JSON.stringify(req.body)
  //var N1=JSON.parse(JSON.stringify({ "id": 4,"Lastname": "Cherif","Firstname": "Sami","age": 3 }))
  User.find({},function (err,result) {
    err?console.log(err):
    res.json(result)
  })
})

// Updating a User with id

router.put("/:id",function (req,res) {
  User.findOneAndUpdate()
  User.findByIdAndUpdate({_id:req.params.id},{$set:req.body},{new:true},function (err,result) {
    err?console.log(err):
    res.json(result)
  })
 })

//Deleting a User with id

 router.delete("/Delete/:id",function (req,res) {
     
 
  User.findByIdAndDelete({_id:req.params.id},function (err,result) {
    err?console.log(err):
    res.json(result)
  })})

//Deleting All Users

  router.delete("/RemoveCollection",function (req,res) {
     
   
    User.collection.remove(function (err,result) {
      err?console.log(err):
      res.json(result)
    })
 })
 module.exports=router