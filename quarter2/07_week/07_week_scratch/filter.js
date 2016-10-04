var users = [
  { name: 'Katie', points: 240 },
  { name: 'Ralph', points: 130 }
];

var winners = filter(users, function(element) {
  return element.points >= 200;
});

function filter (arr, predicate) {
  var newArray = [];

  for (var i = 0; i < arr.length; i++) {
    if (predicate(arr[i])) {
      newArray.push(arr[i]);
    }
  }
  return newArray;
}

// Other solution
// function filter (arr, predicate) {
//   var newArray = [];
//
//   arr.forEach(function(el) {
//     if(predicate(el)) {
//       newArray.push(el);
//     }
//   })
//   return newArray;
// }

// function filter (arr, predicate) {
//   arr.reduce(function(prev, element) {
//     if (callback(element)) {
//       return prev.concat(element);
//     }
//     return prev;
//   }, []);
// }

console.log(winners); // [{ name: 'Katie', points: 240 }]
