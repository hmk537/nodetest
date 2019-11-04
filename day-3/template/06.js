//ejs
//定义：高效的 JavaScript 模板引擎
//render 渲染  第一个参数代表的是模板 第二个参数代表的是数据

//compile 编译  模板 str 数据
//template 模板
//标签
/**
 * 
 * <% %>流程控制标签
 *  <%=%>输出
 *  <%_ %>去除前面空格
 *  <% _%>去除后面的空格
 *  <%-%>语句解析 转译结构到模板
 * <include/> 包含
 */
var http=require("http")
var ejs=require("ejs")
var fs=require("fs")
http.createServer((req,res)=>{
    fs.readFile("./view/inedx.ejs",(err,data)=>{
        var template=data.toString()
        var list=["vue","hmk","node"]
        var result=ejs.render(template,{list:list})
        //response  相应前端请求
        res.end(result)
    })
}).listen(3000)