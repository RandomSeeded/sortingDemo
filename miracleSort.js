// Miracle sort: eventually, due to data corruption, the array will become sorted.
var miracleSort = module.exports = function(arr) {
  return new Promise(function(resolve, reject) {
    function isSorted(arr) {
      for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i+1]) {
          return false;
        }
      }
      return true;
    }
    setInterval(function() {
      if (isSorted(arr)) {
        resolve(arr);
      }
    }, 1000);
  });
}
