//public
var express=require("express")
var path=require("path")
var app=express()
//静态资源中间件   express.static  中间件必须通过use去使用
var static=path.resolve(__dirname,"public")
app.use(express.static(static))
app.get("/",async(req,res)=>{
    res.end("服务搭建成功")
})
app.listen(3000)












/**
 * 是么是cookie
 * cookie是存在访问者计算机中的一个变量，便于访问同一域名或服务器储存的用户信息
 * cookie的优缺点
 * 优点：协助服务器承载压力；存在过期时间，不利于攻击者进行攻击
 * 缺点：长度限制，安全性比较低，存储量小，存储大小4kb
 * 
 * cookie的特点：
 * 保存在浏览器本地
 * 默认不加密，用户可以直接看到
 * 支持被删除
 * cookie便于用于攻击
 * cookie 易被篡改
 */