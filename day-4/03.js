//接受get请求传输的参数
var express=require("express")
var app=express()
app.get("/",(req,res)=>{
    res.send("默认请求")
})
app.get("/list",(req,res)=>{
    res.send({"data":req.query})
})
app.listen(3000)