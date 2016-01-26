// Heapsort: relies on the property of heaps which is that after every operation (addition and removal), a parent is always smaller than both of its children. Therefore to sort, we just add all elements to the heap, then remove them.

// Heap Data Structure
var Heap = function() {
  this.storage = [];

  this.size = 0;

  this.upHeap = function(position) {
    var parentPosition = Math.floor((position - 1)/2);
    if (parentPosition >= 0 && this.storage[position] < this.storage[parentPosition]) {
      var temp = this.storage[position];
      this.storage[position] = this.storage[parentPosition];
      this.storage[parentPosition] = temp;
      this.upHeap(parentPosition);
    }
  };

  this.downHeap = function(position) {
    var childPosition;
    if (this.storage[position * 2 + 2] && this.storage[position * 2 + 2] < this.storage[position * 2 + 1]) {
      childPosition = position * 2 + 2;
    } else {
      childPosition = position * 2 + 1;
    }

    if (this.storage[childPosition] && this.storage[position] > this.storage[childPosition]) {
      var temp = this.storage[position];
      this.storage[position] = this.storage[childPosition];
      this.storage[childPosition] = temp;
      this.downHeap(childPosition);
    }
  };

  this.add = function(elem) {
    this.storage[this.size] = elem;
    this.upHeap(this.size);
    this.size++;
  };

  this.removeRoot = function() {
    var result = this.storage[0];
    this.storage[0] = this.storage.pop();
    this.size--;
    this.downHeap(0);
    return result;
  };
};

// Sorting through use of a heap
var heapSort = function(arr) {
  // Add all elements to the heap
  var heap = new Heap();
  for (var i = 0; i < arr.length; i++) {
    heap.add(arr[i]);
  }

  // Remove all elements from the heap, one at a time
  var results = [];
  while (heap.size > 0) {
    results.push(heap.removeRoot());
  }
  return results;
};

console.log(heapSort([5,4,3,2,1]));
console.log(heapSort([1,3,2,4,5]));
