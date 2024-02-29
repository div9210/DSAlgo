class HeapWithComparator {
  constructor(cFn) {
    this.elements = [];
    this.comparatorFn = cFn;
  }
  size() {
    return this.elements.length;
  }
  swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
  }
  insert(val) {
    // Push the val in the elements
    this.elements.push(val);

    // Heapify Up (Child To Parent)
    let currentIndex = this.elements.length - 1;
    while (currentIndex > 0) {
      let parentIndex = Math.floor((currentIndex - 1) / 2);
      // If relationship between parentIndex element and currentIndex element is
      // as per the comparator function
      // The comparator function will return a value less than 0
      let resultFromComparator = this.comparatorFn(
        this.elements[parentIndex],
        this.elements[currentIndex]
      );
      if (resultFromComparator < 0) {
        // No need for further heapify
        break;
      } else {
        // Swap
        this.swap(this.elements, parentIndex, currentIndex);
        currentIndex = parentIndex;
      }
    }
  }

  delete() {
    let root = this.elements[0];
    if (!root) {
      console.log("Underflow");
      return;
    }

    // Now pick the safest node in the heap i.e rightMost
    let safestNode = this.elements[this.elements.length - 1];
    // Replace the root with safestNode and delete the safestNode
    this.elements[0] = safestNode;
    this.elements.pop();

    // Heapify Down (Parent to Child)
    let currentIndex = 0;
    let n = this.elements.length;
    while (currentIndex < n) {
      let leftChildIndex = 2 * currentIndex + 1;
      let rightChildIndex = 2 * currentIndex + 2;
      let smallestIndex = currentIndex;

      // If the comparatorFn for smallestIndex and leftChildIndex elements returns anything less than 0
      // Then it is right but for the case of opposite i.e more than 0 we need to update smallestIndex
      if (
        leftChildIndex < n &&
        this.comparatorFn(
          this.elements[smallestIndex],
          this.elements[leftChildIndex]
        ) > 0
      ) {
        smallestIndex = leftChildIndex;
      }

      // If the comparatorFn for smallestIndex and rightChildIndex elements returns anything less than 0
      // Then it is right but for the case of opposite i.e more than 0 we need to update smallestIndex
      if (
        rightChildIndex < n &&
        this.comparatorFn(
          this.elements[smallestIndex],
          this.elements[rightChildIndex]
        ) > 0
      ) {
        smallestIndex = rightChildIndex;
      }

      if (smallestIndex != currentIndex) {
        // Swap
        this.swap(this.elements, smallestIndex, currentIndex);
        currentIndex = smallestIndex;
      } else {
        break;
      }
    }

    return root;
  }

  print() {
    console.log("Heap :", this.elements);
  }

  peek() {
    return this.elements[0];
  }
}

let minH = new HeapWithComparator((a, b) => a.data - b.data);
minH.insert({ data: 4 });
minH.insert({ data: 6 });
minH.insert({ data: 2 });
minH.insert({ data: 1 });
minH.insert({ data: 3 });
minH.print();
minH.delete();
minH.print();

module.exports = {
  HeapWithComparator,
};
