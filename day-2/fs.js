var fs=require("fs")
var http=require("http")
http.createServer((req,res)=>{
    // fs.mkdir("./aa",err=>{
    //     if(err){
    //         throw err
    //     }
    //     res.end("hmk")
    // })

    // var a=fs.readFileSync("./1.txt")
    // res.end(a)
    var path=require("path")
    fs.stat("./test",(err,stats)=>{
        console.log(stats.isFile())
        if(stats.isFile()==false){
          var a=  fs.readFileSync("./test")
            res.end()
        }
    })
}).listen(3000)
