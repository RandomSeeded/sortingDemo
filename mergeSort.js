// Merge sort: we 'separate' the array into two subarrays, and sort each recursively. We then iterate over the two sorted subarrays and combine them into a sorted larger array
var mergeSort = function(arr) {
  // Base case: an array of length 1 is sorted
  if (arr.length === 1) {
    return arr;
  } else {
    // Split the array into two sub-arrays and sort
    var leftHalf = mergeSort(arr.slice(0, Math.floor(arr.length/2)));
    var rightHalf = mergeSort(arr.slice(Math.floor(arr.length/2)));

    // Combine the two sorted sub-arrays into a larger array and return
    var output = [];
    while (leftHalf.length || rightHalf.length) {
      if (leftHalf.length && rightHalf.length) {
        if (leftHalf[0] < rightHalf[0]) {
          output.push(leftHalf.splice(0, 1)[0]);
        }
        else {
          output.push(rightHalf.splice(0, 1)[0]);
        }
      } else if (leftHalf.length) {
        output.push(leftHalf.splice(0, 1)[0]);
      } else {
        output.push(rightHalf.splice(0, 1)[0]);
      }
    }
    return output;
  }
};

console.log(mergeSort([1,3,2,4,5]));
console.log(mergeSort([1,3,2,4,5,9,6,7,10,21,1982]));
