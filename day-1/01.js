var http=require("http")
var fs=require("fs")
http.createServer(function(req,res){
    res.writeHead(200,{"Content-type":"text/html;charset=utf-8"})
    if(req.url=="/favicon.ico"){
        return
    }
    if(req.url=="/s"){
        fs.readFile("./bar.html",function(err,data){
            res.end(data)
        })
    }else if(req.url=="/404"){
        fs.readFile("./404.html",function(err,data){
            res.end(data)
        })
    }
}).listen(3000)
