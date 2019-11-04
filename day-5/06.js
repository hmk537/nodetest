var express=require("express")
var app=express()
//路由中间件
var router=express.Router()
app.use(router)
//验证码接口
router.get("/",(req,res)=>{
res.send("hmkhmk")
})
router.get("/code",(req,res)=>{
    var randomNum=function(min,max){
        return Math.ceil(Math.random()*(max-min)+min)
    }
    var str='ABSJCJKSDHOJDSNOCNSDCINSNCKJSNDCIJSDNI12334556678'
    var result=""
    for(var i=0;i<4;i++){
        result+=str[randomNum(0,str.length-1)]
    }
    res.jsonp({
        number:result,
    })
    // res.send({"success":"请求成功","data":result})
})
app.listen(3000)