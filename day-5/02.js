var express=require("express")
var app=express()
var path=require("path")
//cookie中间件
var cookieParser=require("cookie-parser")
app.use(cookieParser())
var static=path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",(req,res)=>{
    console.log("首页中获取:"+req.cookies)
    res.end({"data":"login中的cookie为"+req.cookies})
})
//设置 setcookie
app.get("/login",(req,res)=>{
    var obj=req.query.username
    res.cookie("username",obj,{maxAge:90000,httpOnly:true})
    res.send({"data":obj})
})
//获取 getcookie
app.get("/list",(req,res)=>{
    //获取cookie
    console.log("获取"+req.cookies.username)
    res.end()
})
app.listen(3000)