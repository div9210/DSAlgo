/**
 * @param {string[]} dict
 * @param {number} N
 * @param {number} K
 * @return {string}
 */
class Solution {
  findOrder(dict, N, K) {
    // Initialize adjacency list
    let adjList = {};

    // Initialize visited and topoStack
    let visited = {};
    let topoStack = [];

    // Construct adjacency list and handle prefixes
    for (let i = 0; i < dict.length - 1; i++) {
      let currentWord = dict[i];
      let nextWord = dict[i + 1];
      for (let char of currentWord) {
        if (!adjList[char]) adjList[char] = new Set();
      }
      // Find the first differing character between two consecutive words
      // We need to iterate till both are valid
      let minLength = Math.min(currentWord.length, nextWord.length);
      for (let j = 0; j < minLength; j++) {
        if (currentWord[j] !== nextWord[j]) {
          // Add differing character pairs to adjacency list
          adjList[currentWord[j]].add(nextWord[j]);
          // No need to consider subsequent differing characters, so break
          break;
        }
      }
    }

    // Perform topological sort for all disconnected components
    for (let char in adjList) {
      if (!visited[char]) {
        topoSort(char, adjList, visited);
      }
    }
    return topoStack.reverse().join("");

    // Topological sorting function
    function topoSort(src, adjList, visited) {
      visited[src] = true;
      if (adjList[src]) {
        for (let nbr of Array.from(adjList[src])) {
          if (!visited[nbr]) {
            topoSort(nbr, adjList, visited);
          }
        }
      }
      // At backtracking, add the current node to the stack
      topoStack.push(src);
    }
  }
}

let dict = ["baa", "abcd", "abca", "cab", "cad"];
let sol = new Solution();
console.log(sol.findOrder(dict, dict.length, 4));
