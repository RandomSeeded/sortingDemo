// Bogosort: randomly shuffle the array. If it's now sorted, you're done! Otherwise repeat
var bogoSort = module.exports = function(arr) {
  function isSorted(arr) {
    for (var i = 0; i < arr.length-1; i++) {
      if (arr[i] > arr[i+1]) {
        return false;
      }
    }
    return true;
  }

  var output = arr;
  while (!isSorted(output)) {
    arr = output;
    output = [];
    while (arr.length !== 0) {
      var randIdx = Math.floor(Math.random() * arr.length);
      output.push(arr.splice(randIdx, 1)[0]);
    }
  }
  arr = output;
  return arr;
};
