// Sleepsort: for each number, go to sleep for number seconds, then add it to the end of the array
var sleepSort = module.exports = function(arr) {
  // Our sleep functions will run asynchronously, so we will return once all have completed (resolve the promise)
  return new Promise(function(resolve, reject) {
    var output = [];
    var done = 0;
    for (var i = 0; i < arr.length; i++) {
      setTimeout(function(elem) {
        output.push(elem);
        done++;
        if (done === arr.length) {
          arr = output;
          resolve(arr);
        }
      }, arr[i] * 100, arr[i]);
    }
  });
};
