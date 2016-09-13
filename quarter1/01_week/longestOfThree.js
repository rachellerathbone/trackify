// Define a function named longestOfThree which takes three arguments
//    value1 (string)
//    value2 (string)
//    value3 (string)
//
// Return the longest argument by length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/length
//
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/max
function longestOfThree(value1, value2, value3) {
  var value1Length = value1.length;
  var value2Length = value2.length;
  var value3Length = value3.length;

  // if the length of value1 is longer than the other values, return value1.
  if (value1Length > value2Length && value1Length > value3Length) {
    return value1;
  // if the length of value2 is longer than the other values, return value2.
  } else if (value2Length > value1Length && value2Length > value3Length) {
    return value2;
  // otherwise, return value 3.
  } else {
    return value3;
  }
}

console.log(longestOfThree('cat', 'mouse', 'chimpanzee'));
