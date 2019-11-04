var express=require("express")
var app=express()
var art=require("express-art-template")
//设置模板引擎
// app.set("view rngine","html")
app.engine("html",art)
app.get("/",(req,res)=>{
    var list=["tom","hmk","jack"]
    res.render("home.html",{list:list})
})
app.listen(3000)