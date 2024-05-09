/**
 * @param {number[][]} times
 * @param {number} n
 * @param {number} k
 * @return {number}
 */
var networkDelayTime = function (times, n, k) {
  // Create an adjList
  let adjList = {};
  for (let time of times) {
    let u = time[0];
    let v = time[1];
    let w = time[2];

    if (!adjList[u]) adjList[u] = [];
    adjList[u].push([v, w]);
  }

  let distances = dijkstra(n, adjList, k);

  let maxTime = Math.max(...distances.slice(1)); // Skip 0th index since nodes are labeled from 1
  return maxTime === Infinity ? -1 : maxTime;

  function dijkstra(n, adjList, src) {
    let distances = new Array(n + 1).fill(Infinity);
    distances[src] = 0;

    let pq = new HeapWithComparator((a, b) => a[1] - b[1]);
    pq.insert([src, 0]);

    while (pq.size() > 0) {
      let [node, distance] = pq.delete();

      if (distance > distances[node]) continue;

      if (adjList[node]) {
        for (let i = 0; i < adjList[node].length; i++) {
          let nbr = adjList[node][i];
          const nbrNode = nbr[0];
          const nbrDistance = nbr[1];
          let newDistance = distance + nbrDistance;
          if (newDistance < distances[nbrNode]) {
            distances[nbrNode] = newDistance;
            pq.insert([nbrNode, newDistance]);
          }
        }
      }
    }

    return distances;
  }
};

class PriorityQueueI {
  constructor() {
    this.queue = [];
  }

  enqueue(element) {
    this.queue.push(element);
    this.queue.sort((a, b) => a.distance - b.distance);
  }

  dequeue() {
    if (this.isEmpty()) return null;
    return this.queue.shift();
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

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
