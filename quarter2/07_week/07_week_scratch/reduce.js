var result = reduce([1, 2, 3], function(accum, element) {
  return accum + element;
}, 0);

function reduce(arr, callback, accum) {
  for (let i = 0; i < arr.length; i++) {
    accum = callback(accum,  arr[i]);
  }
  return accum;
}

console.log(result); // 6

// function reduce(arr, callback, accum) {
//   for (let element of arr) {
//     accum = callback(accum,  arr);
//   }
//   return accum;
// }
