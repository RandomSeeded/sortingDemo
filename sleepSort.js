// Sleepsort: for each number, go to sleep for number seconds, then add it to the end of the array
var sleepSort = function(arr) {
  var output = [];
  var done = 0;
  for (var i = 0; i < arr.length; i++) {
    setTimeout(function(elem) {
      output.push(elem);
      done++;
      if (done === arr.length) {
        console.log(output);
      }
    }, arr[i] * 100, arr[i]);
  }
};

sleepSort([1,3,2,4,5]);
