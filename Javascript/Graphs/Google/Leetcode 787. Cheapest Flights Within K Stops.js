/**
 * @param {number} n
 * @param {number[][]} flights
 * @param {number} src
 * @param {number} dst
 * @param {number} k
 * @return {number}
 */
var findCheapestPrice = function (n, flights, src, dst, k) {
  //  Create an adjList
  let adjList = {}; // Unordered Map
  for (let flight of flights) {
    let src = flight[0];
    let dest = flight[1];
    let price = flight[2];

    // Since it will be a directed graph
    if (!adjList[src]) adjList[src] = [];
    adjList[src].push([dest, price]);
  }

  let prices = dijkstra(src, adjList);
  return prices[dst] == Infinity ? -1 : prices[dst];

  function dijkstra(src, adjList) {
    let prices = Array(n + 1).fill(Infinity);

    let pq = new HeapWithComparator((a, b) => a[2] - b[2]); // Min H on the basis of stops
    // Intial State
    pq.insert([src, 0, -1]); // [src, price, stops]
    prices[src] = 0;

    while (pq.size() > 0) {
      let front = pq.peek();
      pq.delete();
      let [src, price, stops] = front;

      if (stops > k) continue;

      // Visit all the neighbours
      if (adjList[src]) {
        for (let nbr of adjList[src]) {
          let [nbrNode, nbrPrice] = nbr;
          let newPrice = price + nbrPrice;
          let nbrStops = stops + 1;
          if (newPrice < prices[nbrNode]) {
            if (nbrStops == k) {
              // Then it has to be the dst node
              // Since anything that comes after this will have k + 1 stops
              // Which is of no use
              // So only if at k stops we reached dest we will update
              if (nbrNode == dst) {
                // Update price
                prices[nbrNode] = newPrice;
                // Insert the nbr entry in pq again
                pq.insert([nbrNode, newPrice, nbrStops]);
              }
            } else {
              // Update price
              prices[nbrNode] = newPrice;
              // Insert the nbr entry in pq again
              pq.insert([nbrNode, newPrice, nbrStops]);
            }
          }
        }
      }
    }

    return prices;

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

// Using Bellman Ford Approach
function findCheapestPrice(n, flights, src, dst, k) {
  // Initialize distances array with infinity
  let distances = new Array(n).fill(Infinity);
  distances[src] = 0;

  // Iterate k+1 times as we can make at most k stops
  for (let i = 0; i <= k; i++) {
    // Create a copy of distances array to avoid updating while iterating
    let temp = distances.slice();
    for (let j = 0; j < flights.length; j++) {
      let [source, destination, price] = flights[j];
      if (
        distances[source] !== Infinity &&
        distances[source] + price < temp[destination]
      ) {
        temp[destination] = distances[source] + price;
      }
    }
    distances = temp;
  }

  // Return the minimum cost to reach destination
  return distances[dst] !== Infinity ? distances[dst] : -1;
}
