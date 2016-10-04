// QUESTION 3
var fs = require('fs');
var newLineFile = fs.readFileSync(process.argv[2], 'utf8');
console.log(newLineFile.toString().match(/\n/g).length);


// LEARNYOUNODE SOLUTION
// var fs = require('fs')
//
// var contents = fs.readFileSync(process.argv[2])
// var lines = contents.toString().split('\n').length - 1
// console.log(lines)
