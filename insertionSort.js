// Insertion sort: similar to sorting a hand of cards. We grow a sorted array from the left. For each new element, we insert that element into its correct position in our sorted list.
var insertionSort = function(arr) {
  // Iterate over the array to find each element to insert
  for (var i = 0; i < arr.length; i++) {
    var elem = arr[i];
    for (var j = i-1; j >= 0; j--) {
      // Shift any elements that are larger than the inserting element to the right
      if (elem < arr[j]) {
        arr[j+1] = arr[j];
      } else {
        // Insert the new element into its correct place
        arr[j+1] = elem;
        break;
      }
    }
  }
  return arr;
};

console.log(insertionSort([1,3,2,4,5]));
