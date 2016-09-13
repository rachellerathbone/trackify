var i = 1;
while (i < 10) {
  console.log(i * i);
  i++;
}

var i = 11;
do {
  console.log(i * i);
  i++;
} while (i < 10);

var books = ["JavaScript: The Good Parts", "Eloquent JS", "You Don't Know JS"];

for (var i = 0; i < books.length; i++) {
    var book = books[i];
    console.log(book);
}

var myArray = [1, 2, 3, 4];

for (var i = 0; i < myArray.length; i++) {
    myArray[i] = myArray[i] + 1;
    console.log(myArray[i]);
}

console.log(myArray);

// Print the numbers 1 to 10 and also the number 10 to 1, side by side.
// Do this using a for loop and a while loop.
var j = 1;
//var i = 10;
while (j < 10) {
  for (var i = 10; i >= 1; i--) {
    j = 11 - i;
    console.log(j + ' ' + i);
  }
}
