class Solution {
  bellmanFord(V, edges, S) {
    let distances = Array(V).fill(100000000);

    // Initialize distance to source vertex
    distances[S] = 0;

    // Relax all edges V - 1 times
    for (let i = 0; i < V - 1; ++i) {
      // Make a flag to notice updation in this iteration
      let isUpdated = false;
      for (const edge of edges) {
        let src = edge[0];
        let dest = edge[1];
        let weight = edge[2];

        // Relaxation step
        if (
          distances[src] !== 100000000 &&
          distances[src] + weight < distances[dest]
        ) {
          // Note : Why are we adding distances[src] !== 100000000
          // Ans : Every time in the Bellman Ford we visit a neighbour point
          // Update it and in the next iteration this neighbour point becomes the new src
          // But if in any case src is INT_MAX or 1e8
          // That means algorithm could not touch it as someone's neighbour
          // Maybe a disconnected component

          distances[dest] = distances[src] + weight;
          isUpdated = true;
        }
      }

      if (!isUpdated) break;
    }

    // Run Relaxation step one more time
    for (const edge of edges) {
      let src = edge[0];
      let dest = edge[1];
      let weight = edge[2];

      // Relaxation step
      if (
        distances[src] !== 100000000 &&
        distances[src] + weight < distances[dest]
      ) {
        return [-1];
      }
    }

    return distances;
  }
}
