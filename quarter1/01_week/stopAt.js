// Define a function named stopAt that takes two arguments
//   source (string)
//   stop (string)
//
// Return the source all the way up to the position where stop begins. For
// example, given 'how now brown cow' and 'brown', then return 'how now'.

function stopAt(source, stop) {
  var beginningOfStop = source.indexOf(stop);
  var str = source;
  var res = str.slice(0, beginningOfStop -1);

  return res;

}
console.log(stopAt('how now brown cow', 'brown'));
