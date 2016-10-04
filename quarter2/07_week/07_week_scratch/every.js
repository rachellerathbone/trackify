function every(arr, predicate) {
  // for (let i = 0; i < arr.length; i++) {
  //   if (!predicate(arr[i])) {
  //     return false;
  //   }
  // }
  // return true;

  // for (let item of arr) {
  //   if (!predicate(item)) {
  //     return false;
  //   }
  // }
  // return true;

  return arr.reduce((prevValue, elt) => {
    return prevValue && predicate(elt);
  }, true);
}

every([6, 2, 3], function(element) {
  return element % 2 === 0;
});

every([2, 5, 6], function(element) {
  return element % 2 === 0;
});


console.log(result); // false
console.log(result); // true
