const { dlog, Info } = require('../lib/dlog')
var rf=require("fs");
var lMatch = require('./LRQExport').lMatch

var data=rf.readFileSync("./src/text", "utf-8");
dlog(data, new Info(`data`), 0)


//3. 匹配一组字符

// 3.1 匹配多个字符中的某一个
// 只匹配 na 或 sa开头的, 不匹配 ca
// [] 定义一个字符集匹配任意和字符集里面的字符相同的字符
lMatch(data, /^[ns]a.\.xls/gm);

let str = "The phrase \"regular expression\" is ofthen \n abbreviated as RegEx or regex."
lMatch(str, /[Rr]eg[Ee]x/g);

// 3.2 利用字符集合区间
// 如果list 里面有个 sam.xls 文件, . 可以匹配任意字符, 而不仅限于数字
// 使用字符集可以限制
//[A-Z], [a-z], [0-9]
// 字符集也可以给出多个字符区间 [A-Za-z0-9]
lMatch(data, /[ns]a[0-9]\.xls/g);


// 匹配 1到3, 8到9之间的数字 结果: [ '1', '2', '3', '8', '9' ]
let nameStr = "0123456789"
lMatch(nameStr, /[1-38-9]/g)


// 3.3 取非匹配 ^
// 不匹配 1到3, 8到9之间的数字 结果:  [ '0', '4', '5', '6', '7' ]
// 在字符集中使用 ^, 是对整个字符集进行取非.
lMatch(nameStr, /[^1-38-9]/g)
