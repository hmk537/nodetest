//buffer 二进制数据 缓存区

/*
什么是buffer？
从类型来说，就是一个类数组
从内存来说，就是开辟的新内存空间
作用：
处理二进制数据。解决数据传输过大
案例：文件流，事件流 tcp
别名：缓存区(等待区)
什么是二进制数据(0b)？ 常用八进制(0)，十六进制(0x)
返回0和1
创建buffer：new buffer()//废弃
因为buffer是一个全局对象，所以不需要通过require加载

buffer可以传输的类型：string, Buffer, ArrayBuffer, Array, or Array-like Object
buffer下面有哪些方法？
toJson toString slice contact length
字节 bit byte

buffer的编码类型
utf8  base64 hex Ascii unicode 
//base64常用于上传图片，再次压缩数据，数据量小，安全

buffer和cache的区别？！！！！！！！！！！！！！
buffer相当于临时居住地，而cache是你永久的家
*/

//第一种定义buffer的方式
//buffer.from 把字符串转换成buffer
// var buf=Buffer.from("node")
// var buf=Buffer.from("node")
// console.log(buf)

//返回一个初始化的数据，防止生成新的数据包含旧数据
var buf=Buffer.alloc(10)//定义一个数据长度为10的缓冲区，输出10个00
// var buf=Buffer.allocUnsafe()  //不安全不推荐使用  作用：未被初始化的buffer
console.log(buf)