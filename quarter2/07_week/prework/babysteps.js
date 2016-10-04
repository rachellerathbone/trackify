// QUESTION 2
// SOLUTION 1
// var args = process.argv;
//
// args = args.splice(2, args.length);
//  var answer = args.reduce(function(a, b) {
//   return +a + +b;
// });

SOLUTION 2
var answer = 0;

for (var i = 2; i < process.argv.length; i++) {
  answer += Number(process.argv[i]);
}

// SOLUTION 3
// var numbers = process.argv.slice(2),
// answer = numbers.reduce(function (curr, prev) {
//   return + curr + +prev;
// });

console.log(answer);
