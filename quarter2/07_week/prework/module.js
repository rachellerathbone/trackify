var fs = require('fs');

module.exports = function(dirName, extName, callback) {
  fs.readdir(dirName, function(err, data) {
    if (err) {
      return callback(err);
    }
    var regexTest = new RegExp('.+\.' + extName + '$');
    data = data.filter(function(elem) {
      return regexTest.test(elem);
    });
    callback(null, data);
  });
}

// LEARNYOUNODE SOLUTION
// var fs = require('fs')
// var path = require('path')
//
// module.exports = function (dir, filterStr, callback) {
//
//  fs.readdir(dir, function (err, list) {
//    if (err)
//      return callback(err)
//
//    list = list.filter(function (file) {
//      return path.extname(file) === '.' + filterStr
//    })
//
//    callback(null, list)
//  })
// }
