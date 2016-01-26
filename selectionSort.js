// Selection sort: builds up a sorted array from left to right by repeatedly selecting the smallest non-sorted element
var selectionSort = function(arr) {
  for (var i = 0; i < arr.length; i++) {
    var min = arr[i];
    var minAt = i;

    // Find the minimum value not already sorted
    for (var j = i; j < arr.length; j++) {
      if (arr[j] < min) {
        minAt = j;
        min = arr[j];
      }
    }

    // Swap the minimum value with the ith value
    var temp = arr[i];
    arr[i] = arr[minAt];
    arr[minAt] = temp;
  }
  return arr;
};

console.log(selectionSort([1,3,2,4,5]));
