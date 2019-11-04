var express=require("express")
var app=express()
//指代的是get请求
app.get("/",(req,res)=>{
    res.send({"success":"ok","data":[{"name":"hmk","age":"18"}]})

})
app.get("/getid/:id",(req,res)=>{
    res.send({"data":"接受的id为"+req.params.id})

})
app.post("/l",(req,res)=>{
    res.send({"success":"postok","data":[{"name":"hmk","age":"18"}]})

})
app.listen(3000)