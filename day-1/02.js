var http = require("http")
var url = require("url")
var href = "http://localhost:3000?username=hmk&password=hmkhmk"
http.createServer((req, res) => {
    res.writeHead(200, { "Content-type": "text/html;charset=utf-8" })
    var obj = url.parse(req.url, true).query
    res.end("接受的nusrname是：" + obj.username)
    // var obj=url.resolve("http://localhost:3000","/new")
    console.log(url.format({
        protocol: 'http:',
        slashes: true,
        auth: null,
        host: 'localhost:3000',
        port: '3000',
        hostname: 'localhost',
        hash: null,
        search: '?username=hmk&password=hmkhmk',
        query: 'username=hmk&password=hmkhmk',
        pathname: '/',
        path: '/?username=hmk&password=hmkhmk',
        href: 'http://localhost:3000/?username=hmk&password=hmkhmk'
    }))
    // console.log(url.parse(href,true))
    // console.log(url.parse(href))
    // res.end()                
}).listen(3000)