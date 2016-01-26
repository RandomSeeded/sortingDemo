// Miracle sort: eventually, due to data corruption, the array will become sorted.
var miracleSort = function(arr) {
  function isSorted(arr) {
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        return false;
      }
    }
    return true;
  }
  while (!isSorted(arr)) {
  }
  return arr;
}

console.log(miracleSort([1,3,2,4,5]));
