var http = require('http'),
  concat = require('concat-stream');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('error', function(err) {
    return console.error(err);
  });
  var concatBuffer = concat(function(buffer) {
    console.log(buffer.length);
    console.log(buffer);
  });
  response.pipe(concatBuffer);
});

// LEARNYOUNODE SOLUTION
// var http = require('http')
// var bl = require('bl')
//
// http.get(process.argv[2], function (response) {
//  response.pipe(bl(function (err, data) {
//    if (err)
//      return console.error(err)
//    data = data.toString()
//    console.log(data.length)
//    console.log(data)
//  }))
// })
