const { dlog, Info } = require('../lib/dlog')
var rf=require("fs");
var lMatch = require('./LRQExport').lMatch
var data=rf.readFileSync("./src/text", "utf-8");
dlog(data, new Info(`data`), 0)

//4. 使用元字符
// 4.1 对特殊字符进行转义
// 匹配 \
lMatch("\\home\\ben\\sales\\", /\\/g);

// 4.2 匹配空白字符
// [\b] 回退(并删除)一个字符 (Backspace键)
// \f 换页符
// \n 换行符
// \r 回车符
// \t 制表符(Tab键)
// \v 垂直制表符
data=rf.readFileSync("./src/cvsformat", "utf-8");
dlog(data, new Info(`data`), 0)
lMatch(data, /\t/g)

// 4.3 匹配特定的字符类别
// 4.3.1 匹配数字(与非数字)
// \d 任何一个数字,(等价于 [0-9])
// \D 任何一个非数字字符(等价于 [^0-9])

// 4.3.2匹配字母和数字
// \w 任意字母数字字符(大小写均可)或下划线字符(等价于[a-zA-z0-9_])
// \W 任意非字母或非下划线字符
let numText = rf.readFileSync("./src/numText", "utf-8");
lMatch(numText, /\w\d\w\d\w\d/g);
lMatch(numText, /\W\D\W\D\W\D/gm);

// 4.3.3 匹配空白字符 (与非空白字符)

