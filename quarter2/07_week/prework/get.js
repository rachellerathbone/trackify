var http = require('http');

http.get(process.argv[2], function(response) {
  response.setEncoding('utf8');
  response.on('error', function(err) {
    console.error(err);
  });
  response.on('data', function(data) {
    console.log(data);
  });
});

// LEARNYOUNODE SOLUTION
// var http = require('http')
//
// http.get(process.argv[2], function (response) {
//  response.setEncoding('utf8')
//  response.on('data', console.log)
//  response.on('error', console.error)
// }).on('error', console.error)
