// var fs = require('fs');
//
// fs.readdir(process.argv[2], function(err, data) {
//   if (err) {
//     return console.error(err);
//   }
//   var regexTest = new RegExp('.+\.' + process.argv[3] + '$');
//   data.filter(function(elem) {
//     return regexTest.test(elem);
//   }).
//   forEach(function(elem) {
//     console.log(elem);
//   });
// });

// LEARNYOUNODE SOLUTION
var fs = require('fs');
var path = require('path');

var folder = process.argv[2];
var ext = '.' + process.argv[3];

fs.readdir(folder, function (err, files) {
 if (err) return console.error(err)
 files.forEach(function(file) {
     if (path.extname(file) === ext) {
         console.log(file)
     }
 });
});
