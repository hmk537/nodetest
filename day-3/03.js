//监控日志 readline
var fs=require("fs")
var readline=require("readline")
var readStream= fs.createReadStream("./1.txt")
/*

data监听输入数据
end 完成数据读取
line 监听日志事件

*/
var rl=readline.createInterface({
    //监听输入数据
    input:readStream
})
//日志执行事件
rl.on("line",(lineData)=>{
    console.log(lineData)
    console.log(new Date()+"linenum执行")
})
//日志读取完成关闭
rl.on("close",()=>{
    console.log("line监听数据完毕")
})