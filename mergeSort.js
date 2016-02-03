// Merge sort: we 'separate' the array into two subarrays, and sort each recursively. We then iterate over the two sorted subarrays and combine them into a sorted larger array
var mergeSort = module.exports = function(arr) {
  // Base case: an array of length 1 is sorted
  
  var innerMerge = function(arr) {
    if (arr.length === 1) {
      return arr;
    } else {
      // Split the array into two sub-arrays and sort
      var leftHalf = innerMerge(arr.slice(0, Math.floor(arr.length/2)));
      var rightHalf = innerMerge(arr.slice(Math.floor(arr.length/2)));

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

  return new Promise(function(resolve, reject) {
    resolve(innerMerge(arr));
  });
};
