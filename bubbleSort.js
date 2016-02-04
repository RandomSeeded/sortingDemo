// Bubble sort: similar to selection sort, will build up a sorted array from left to right. Called bubble sort due to the way the smallest elements 'bubble up' to the start of the array via swapping
var bubbleSort = module.exports = function(arr) {
  return new Promise(function(resolve, reject) {
    for (var i = 0; i < arr.length; i++) {
      var alreadySorted = true;
      for (var j = arr.length - 1; j > i; j--) {
        if (arr[j] < arr[j - 1]) {
          var temp = arr[j];
          arr[j] = arr[j - 1];
          arr[j - 1] = temp;
          alreadySorted = false;
        }
      }
      if (alreadySorted) {
        resolve(arr);
      }
    }
    resolve(arr);
  });
};
