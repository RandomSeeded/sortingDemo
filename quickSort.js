// Quick sort: divides the array into two sub-arrays, with elements smaller than and greater than a 'pivot.' These sub-arrays are then sorted recursively. The pivot is guaranteed to be in the correct place
// This is an in-place implementation of quick-sort
var quickSort = function(arr, start, end) {
  start = start || 0;
  if (end === undefined) {
    end = arr.length;
  }

  // Base case: arrays of length 1 are already sorted
  if (end - start <= 1) {
    return;
  }

  // Recursive case: we create sorted arrays of smaller and larger nums
  var pivot = arr[end-1];
  var newPivotIndex = start;
  for (var i = start; i < end; i++) {
    if (arr[i] < pivot) {
      var temp = arr[i];
      arr[i] = arr[newPivotIndex];
      arr[newPivotIndex] = temp;
      newPivotIndex++;
    }
  }
  var temp = arr[newPivotIndex];
  arr[newPivotIndex] = arr[end-1];
  arr[end-1] = temp;
  quickSort(arr, start, newPivotIndex);
  quickSort(arr, newPivotIndex+1, end);

  return arr;
};

// console.log(quickSort([1,3,2,4,5,5,9]));
// console.log(quickSort([4,5,5,9]));
// console.log(quickSort([4,5,5]));

var randArr = [];
for (var i = 0; i < 50; i++) {
  randArr.push(Math.floor(Math.random()*100));
}
console.log(quickSort(randArr));

