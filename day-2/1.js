var http=require("http")
var router=require("./2")
http.createServer((req,res)=>{
    switch(req.url){
        case "/home":router.home(req,res);
        break;
    }
}).listen(3000)