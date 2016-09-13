// Define a function named leftPad5 that takes one argument
//    word (string)
//
// If the argument's length is less than 5
//    Return the argument but prefixed with spaces until it's 5 characters long
// If the argument's length is 5 or more characters
//    Return the argument
function leftPad5(word) {
  if (word.length >= 5) {
      return word;
  }

  // need to find length of string
  var lengthOfWord = word.length;
  // subtract length from 5
  var paddingRequired = 5 - lengthOfWord;
  // initialize a count at 0
  // continue looping until paddingRequired for string has been reached
  // on each iteration, add a space on the front of the word
  for (var i = 0; i < paddingRequired; i++) {
    word = ' ' + word;
  }
  // once paddingRequired has been reached, exit loop and return word with left padding.
  return word;
}

console.log(leftPad5('cat'));
