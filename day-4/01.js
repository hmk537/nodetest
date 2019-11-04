var http=require("http")
var fs=require("fs")
var art=require("art-template")

http.createServer((req,res)=>{
    fs.readFile("./index.art",(err,data)=>{
        var template=data.toString()
        var list=["vue","hmk","node"]
        var htmlData=art.render(template,{a:list})
        res.end(htmlData)
    })
}).listen(3000)