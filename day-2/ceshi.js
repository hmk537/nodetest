var http=require("http")
var form=require("formidable")
var path=require('path')
var fs=require("fs")
http.createServer((req,res)=>{
    if(req.url=="/dopost"){
        var fm=form.IncomingForm()
        fm.uploaddir="./test"//设置文件上传存放地址
        fm.parse(req,function(err,fields,files){
            var low=files.pic.path
            var extname=path.extname(files.pic.name)
            var fanishon="./test/"+"3344"+extname
            fs.rename(low,fanishon,(err)=>{
                if(err) throw err
            })
            res.end("success")
        })
    }
}).listen(3000)