// Solved Using - Kruskal's Algorithm
function findParent(node, parent) {
  if (node == parent[node]) return node;

  return (parent[node] = findParent(parent[node], parent));
}

function unionSet(rank, parent, u, v) {
  let uParent = findParent(u, parent);
  let vParent = findParent(v, parent);

  if (uParent !== vParent) {
    if (rank[uParent] > rank[vParent]) {
      parent[vParent] = uParent;
      rank[uParent]++;
    } else {
      parent[uParent] = vParent;
      rank[vParent]++;
    }
  }
}

var findRedundantConnection = function (edges) {
  let parent = new Array(edges.length + 1).fill(0);
  for (let i = 0; i < parent.length; i++) {
    parent[i] = i;
  }
  let rank = new Array(edges.length + 1).fill(0);
  for (const [u, v] of edges) {
    let uParent = findParent(u, parent);
    let vParent = findParent(v, parent);

    if (uParent == vParent) {
      return [u, v];
    } else {
      unionSet(rank, parent, u, v);
    }
  }

  return [];
};
