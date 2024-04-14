/**
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */
var findOrder = function (numCourses, prerequisites) {
  const adjacencyList = new Array(numCourses).fill(null).map(() => []);

  // Construct the adjacency list
  for (const [course, pre] of prerequisites) {
    adjacencyList[pre].push(course);
  }

  const sortedCourses = topoSort(numCourses, adjacencyList);
  return sortedCourses.length === numCourses ? sortedCourses : [];
};

function topoSort(V, adj) {
  let result = [];
  let q = [];
  let indegree = {};

  // Initialize indegree map
  for (let nbrs of adj) {
    for (let n of nbrs) {
      indegree[n] ? indegree[n]++ : (indegree[n] = 1);
    }
  }

  // Since we are looping over adj list
  // and 0 does not come in any adj list (independent node)
  // Check all the independent nodes in all the disconnected components of graph
  for (let node = 0; node < V; node++) {
    if (!indegree[node]) {
      q.push(node);
    }
  }

  while (q.length > 0) {
    let front = q.shift();
    result.push(front);

    // Visit all it's neighbours and decrease one indegree for all of them
    // as the front node has been removed from the system
    // Thus front is not parent anymore
    for (let n of adj[front]) {
      // Minus 1 for every child / n since front is no more (moye moye)
      indegree[n]--;

      // If by doing this indegree becomes 0
      if (indegree[n] == 0) {
        q.push(n);
      }
    }
  }

  return result;
}
