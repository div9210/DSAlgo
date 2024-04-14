class Solution {
  // Function to find the shortest distance of all the nodes
  // from the source node S using Dijkstra's algorithm.
  dijkstra(V, Adj, S) {
    // Array to store distances from source node S to all other nodes.
    let distances = Array(V).fill(Number.MAX_SAFE_INTEGER);

    // Min heap to store nodes and their distances.
    let minHeap = new HeapWithComparator((a, b) => a.distance - b.distance);

    // Initial state: Add the source node to the min heap with distance 0.
    minHeap.insert({ element: S, distance: 0 });
    // Distance from source to itself is 0.
    distances[S] = 0;

    // Loop until min heap is empty.
    while (minHeap.size() > 0) {
      // Extract the node with minimum distance from the min heap.
      let { element, distance: srcDistance } = minHeap.peek();
      minHeap.delete();

      // Iterate through neighbour nodes of the current node.
      for (let neighbour of Adj[element]) {
        // Extract neighbour element and distance from the adjacency list.
        let [neighbourElement, neighbourDistance] = neighbour;

        // Calculate the distance to the neighbour node via current node.
        let newDistance = srcDistance + neighbourDistance;

        // Update the distance if the new distance is smaller.
        if (newDistance < distances[neighbourElement]) {
          distances[neighbourElement] = newDistance;
          // Update the distance in min heap.
          minHeap.insert({ element: neighbourElement, distance: newDistance });
        }
      }
    }

    return distances;
  }
}

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
