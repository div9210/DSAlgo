//User function Template for javascript

/**
 * @param {string[]} dict
 * @param {number} N
 * @param {number} K
 * @return {string}
 */
class Solution {
  findOrder(dict, N, K) {
    // This is a classic topological ordering question
    let adjList = {} // Unordered Map

    for (let i = 0; i < dict.length - 1; i++) {
      let currentWord = dict[i];
      let nextWord = dict[i + 1];

      for (let char of currentWord) {
        if (!adjList[char]) adjList[char] = new Set();
      }

      // Traverse on both the strings simultaneously
      // till the index where they both are valid
      let minLength = Math.min(currentWord.length, nextWord.length);
      for (let it = 0; it < minLength; it++) {
        // Find the first differential character
        if (currentWord[it] != nextWord[it]) {
          adjList[currentWord[it]].add(nextWord[it]);
          // We need to find only the first differential character so we can stop here
          break;
        }
      }
    }


    // For every character in adjList - Run topoSort
    let ordering = [];
    let visited = {} // Unordered Map
    let callStack = {};
    for (let keyChar in adjList) {
      if (!visited[keyChar]) {
        let isCycle = dfsTopoSort(keyChar, adjList, visited);
        if (isCycle) return [];
      }
    }

    return ordering;


    function dfsTopoSort(src, adjList, visited) {
      // Mark src as visited
      visited[src] = true;
      callStack[src] = true;

      // Visit all the unvisited neighbors
      if (adjList[src]) {
        for (let nbr of Array.from(adjList[src])) {
          if (!visited[nbr]) {
            let checkCycleFurther = dfsTopoSort(nbr, adjList, visited);
            if (checkCycleFurther) return true
          } else if (visited[nbr] && callStack[nbr]) return true;
        }
      }

      // Backtracking call
      ordering.unshift(src);
      callStack[src] = false;
      return false;
    }
  }
}