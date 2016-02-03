// Bogosort: randomly shuffle the array. If it's now sorted, you're done! Otherwise repeat
var bogoSort = module.exports = function(arr) {
  return new Promise(function(resolve, reject) {
    function isSorted(arr) {
      for (var i = 0; i < arr.length-1; i++) {
        if (arr[i] > arr[i+1]) {
          return false;
        }
      }
      return true;
    }

    function reSort(arr) {
      temp = [];
      while (arr.length !== 0) {
        var randIdx = Math.floor(Math.random() * arr.length);
        temp.push(arr.splice(randIdx, 1)[0]);
      }
      arr = temp;
      if (!isSorted(arr)) {
        setTimeout(reSort, 0, arr);
      } else {
        resolve(arr);
      }
    }
    setTimeout(reSort, 0, arr);
  });
};
