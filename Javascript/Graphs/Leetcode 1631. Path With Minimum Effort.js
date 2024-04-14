var minimumEffortPath = function (heights) {
  const rows = heights.length;
  const cols = heights[0].length;

  // Initialize distances array to store efforts
  let distances = Array.from({ length: rows }, () =>
    Array(cols).fill(Infinity)
  );
  distances[0][0] = 0; // Start cell

  // Priority queue to explore cells in order of minimum effort
  let minHeap = new HeapWithComparator((a, b) => a.dist - b.dist);
  minHeap.insert({ row: 0, col: 0, dist: 0 }); // Start cell

  // Possible movements: up, down, left, right
  const directions = [
    [-1, 0],
    [1, 0],
    [0, -1],
    [0, 1],
  ];

  // Continue until all cells have been explored
  while (minHeap.size() > 0) {
    // Dequeue cell with minimum effort
    let { row, col, dist } = minHeap.delete();

    // Explore all four possible movements
    for (const [dx, dy] of directions) {
      const newRow = row + dx;
      const newCol = col + dy;

      // Check if new cell is within bounds
      if (newRow < 0 || newRow >= rows || newCol < 0 || newCol >= cols) {
        continue; // Skip out of bounds cells
      }

      // Calculate new effort (maximum absolute difference in heights)
      const newDist = Math.max(
        dist,
        Math.abs(heights[row][col] - heights[newRow][newCol])
      );

      // Update effort if it's less than current effort for the cell
      if (newDist < distances[newRow][newCol]) {
        distances[newRow][newCol] = newDist; // Update effort
        minHeap.insert({ row: newRow, col: newCol, dist: newDist }); // Enqueue adjacent cell
      }
    }
  }

  // Effort required to reach the bottom-right cell
  return distances[rows - 1][cols - 1];
};

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
    if (this.elements.length == 0) {
      console.log("Underflow");
      return null;
    }

    let root = this.elements[0];

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

let heights = [
  [1, 2, 2],
  [3, 8, 2],
  [5, 3, 5],
];

console.log(minimumEffortPath(heights));
