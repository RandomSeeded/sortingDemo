// Gnome sort: very similar to insertion sort. However, instead of 'inserting' the element in the correct position, we swap it backwards until finding the correct position. This can even be done without nested loops
var gnomeSort = module.exports = function(arr) {
  return new Promise(function(resolve, reject) {
    var pos = 1;
    while (pos < arr.length) {
      if (arr[pos-1] != undefined && arr[pos] < arr[pos-1]) {
        var temp = arr[pos];
        arr[pos] = arr[pos-1];
        arr[pos-1] = temp;
        pos--;
      } else {
        pos++;
      }
    }
    resolve(arr);
  });
};
