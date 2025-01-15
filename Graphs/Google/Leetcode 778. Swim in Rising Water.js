/**
 * @param {number[][]} grid
 * @return {number}
 */
var swimInWater = function (grid) {
  let dist = dijkstra(0, 0);
  return dist[grid.length - 1][grid[0].length - 1];

  function dijkstra(srcx, srcy) {
    const directions = [
      [-1, 0],
      [0, 1],
      [1, 0],
      [0, -1],
    ];
    let pq = new HeapWithComparator((a, b) => a[2] - b[2]);
    let distances = Array(grid.length)
      .fill()
      .map(() => Array(grid[0].length).fill(-1));
    // no need of visited
    // let visited = Array(grid.length).fill().map(() => Array(grid[0].length).fill(false));

    // Intial State
    pq.insert([srcx, srcy, grid[srcx][srcy]]); // [x, y, maxH]
    while (pq.size() > 0) {
      let front = pq.peek();
      pq.delete();
      let [x, y, maxH] = front;
      distances[x][y] = maxH;
      // visited[x][y] = true;

      // Visit all directions
      for (let [dx, dy] of directions) {
        let newx = x + dx;
        let newy = y + dy;

        if (inBound(newx, newy) && distances[newx][newy] == -1) {
          let visitingHeight = grid[newx][newy];
          pq.insert([newx, newy, Math.max(maxH, visitingHeight)]);
        }
      }
    }

    return distances;
  }

  function inBound(x, y) {
    return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
  }
};



class HeapWithComparator {
  constructor(cFn) {
    this.elements = [];
    this.comparatorFn = cFn;
  }
  heapifyUp(index) {
    let currentIndex = index;
    while (currentIndex > 0) {
      const parentIndex = Math.floor((currentIndex - 1) / 2);
      if (
        this.comparatorFn(
          this.elements[currentIndex],
          this.elements[parentIndex]
        ) < 0
      ) {
        this.swap(this.elements, currentIndex, parentIndex);
        currentIndex = parentIndex;
      } else {
        break;
      }
    }
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
    this.heapifyUp(this.elements.length - 1);
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
