/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function (tickets) {
  tickets.sort((a, b) => {
    if (a[0] !== b[0]) {
      return a[0].localeCompare(b[0]);
    } else {
      return a[1].localeCompare(b[1]);
    }
  });

  let adjList = {};
  for (let ticket of tickets) {
    let [src, dest] = ticket;

    if (!adjList[src]) adjList[src] = [];
    adjList[src].push(dest);
  }
  
  let result = [];
  dfs("JFK");
  return result;

  function dfs(src) {
    // Visit all the neighbours
    if (adjList[src]) {
      while (adjList[src].length > 0) {
        let nbr = adjList[src].shift(); // Take the first destination
        dfs(nbr); // Explore further from this destination
      }
    }

    // Backtracking
    result.unshift(src); // But insert at beginning of array
    // So that you can avoid the reverse() at the time of returning
  }
};
