var testArr = [];
var intSize = 10; // just kidding they're not integers
var numInts = 10000;

// Randomly generates test data
for (var i = 0; i < numInts; i++) {
  testArr.push(Math.random() * intSize);
}

// Helper method: checks to ensure our sorting method has worked
var isSorted = function(arr) {
  for (var i = 0; i < arr.length-1; i++) {
    if (arr[i] > arr[i+1]) {
      return false;
    }
  }
  return true;
};

// Handler for sorting algorithms which run in-place
var standardSortHandler = function(arr, algorithm, name) {
  var start = Date.now();
  if (isSorted(algorithm(arr))) {
    console.log(name, "finished succesfully with a time of", Date.now() - start, "ms");
  } else {
    console.log(name, "sort finished unsuccesfully");
  }
};

// Handler for sorting algorithms which return promises
var promiseFn = function(arr, algorithm, name) {
  var start = Date.now();
  var promise = algorithm(arr);
  promise.then(function(arr) {
    if (isSorted(arr)) {
      console.log(name, "finished succesfully with a time of", Date.now() - start, "ms");
    } else {
      console.log(name, "sort finished unsuccesfully");
    }
  });
}

// Definitions
var sortingHandlers = {
  sleepSort: promiseFn,
  gnomeSort: promiseFn,
  bogoSort: promiseFn,
  miracleSort: promiseFn,
  selectionSort: promiseFn,
  bubbleSort: promiseFn,
  insertionSort: promiseFn,
  mergeSort: promiseFn,
  quickSort: promiseFn,
  heapSort: promiseFn,
};


// Imports algorithms
var sortingAlgorithms = {};
for (var algorithm in sortingHandlers) {
  sortingAlgorithms[algorithm] = require('./'+algorithm);
}

// Time tests
for (var algorithm in sortingAlgorithms) {
  var arrCopy = testArr.slice();
  sortingHandlers[algorithm](arrCopy, sortingAlgorithms[algorithm], algorithm);
}



