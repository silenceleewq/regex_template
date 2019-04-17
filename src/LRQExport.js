const { dlog, Info } = require('../lib/dlog')

exports.lMatch          = lMatch
function lMatch(str, pattern) {
  var result = str.match(pattern)
  dlog(result, new Info(`result`), 0)
}
