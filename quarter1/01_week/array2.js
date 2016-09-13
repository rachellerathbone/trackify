function foo(arr) {
  arr[0] = 1;
}

var arr = [];
foo(arr);
console.log(arr);
