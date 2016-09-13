// create funciton that takes 2 parameters
// the first parameter is an array of numbers, the second is the
// number we are searching for
function findIndex(values, target) {
  // return array, search number, start of array, and end of array
  return binarySearch(values, target, 0, values.length - 1);
};

// create a function with 4 parameters:
// search number, start of array, and end of array
function binarySearch(values, target, start, end) {
  // if the start of the array is greater than the end of the array,
  // the array does not exist
  if (start > end) {
    return - 1;
  }

  // create a variable that adds the first and last index, divides by 2,
  // and rounds down to nearest integer, to find the midpoint of the array
  var middle = Math.floor((start + end) / 2);
  // create a variable that stores the middle index of the array
  var value = values[middle];

  // if the middle of the array is greater than the target
  if (value > target) {
    // return the array, target, start of array and the end of the array, which
    // is now the middle of the array -1
    return binarySearch(values, target, start, middle-1);
  }
  // if the middle of the array is less than the target number
  if (value < target) {
    // return the array, target, start of the array (which is now the index to the
    // left of the midpoint, and end of the array
    return binarySearch(values, target, middle+1, end);
  }
  // return value when it becomes the middle number
  // in example, target is found on the 3rd iteration.
  return middle; //found!
}

console.log(findIndex([1, 4, 6, 7, 12, 13, 15, 18, 19, 20, 22, 24], 20));
//finished
