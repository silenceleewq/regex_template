const { dlog, Info } = require('../lib/dlog')
var process = require('child_process');
var exec = require('child_process').exec;
var rf=require("fs");
var lMatch = require('./LRQExport').lMatch;
var text = ""
function foo (err, std, stderr) {
  text = std
  // dlog(text, new Info(`text`), 0)
  // if (error !== null) {
  //   console.log('exec error: ' + error);
  // }
}

// exec('pwd', function (err, stdOut, stdErr) {
//   dlog(stdOut, new Info(`stdOut`), 0)
// })



// 正则表达式
// 匹配静态文本


let str = 'hello world hello world'
var patt1 = /ll/
var result = str.match(patt1)
dlog(result, new Info(`result`), 0)

// 匹配多个结果
patt1 = /ll/g
result = str.match(patt1)
dlog(result, new Info(`result`), 0)



// 2.2 匹配任意字符 .
// 同步读取文件内容
var data=rf.readFileSync("./src/text", "utf-8");
dlog(data, new Info(`data`), 0)
// patt1=/sales./g
// result = data.match(patt1)
// dlog(result, new Info(`result`), 0)

lMatch(data, /sales./g);

// 2.3 匹配特殊字符, 需要在特殊字符前加 \ 转义符
lMatch(data, /.a.\.xls/g)
