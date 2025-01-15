//User function Template for javascript

class Solution {
  // Function to find the shortest distance of all the nodes
  // from the source node src using Dijkstra's algorithm.
  dijkstra(V, Adj, src) {
    let distances = Array(V).fill(Number.MAX_SAFE_INTEGER);

    let pq = new PriorityQueue();

    // Initial state: Add the source node to the min heap with distance 0.
    pq.enqueue({ element: src, distance: 0 });
    // Distance from source to itself is 0.
    distances[src] = 0;

    // Loop until min heap is empty.
    while (!pq.isEmpty()) {
      // Extract the node with minimum distance from the min heap.
      let { element, distance: srcDistance } = pq.dequeue();

      // Iterate through neighbour nodes of the current node.
      for (let neighbour of Adj[element]) {
        // Extract neighbour element and distance from the adjacency list.
        let [neighbourElement, neighbourDistance] = neighbour;

        // Calculate the distance to the neighbour node via current node.
        let newDistance = srcDistance + neighbourDistance;

        // Update the distance if the new distance is smaller.
        if (newDistance < distances[neighbourElement]) {
          distances[neighbourElement] = newDistance;
          // Delete the existing entry
          pq.queue = pq.queue.filter((e) => e.element != neighbourElement);
          // Update the distance in min heap.
          pq.enqueue({ element: neighbourElement, distance: newDistance });
        }
      }
    }

    return distances;
  }
}

class PriorityQueue {
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
