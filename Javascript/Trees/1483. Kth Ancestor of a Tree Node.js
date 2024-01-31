// You are given a tree with n nodes numbered from 0 to n - 1 in the form of a parent array
// parent where parent[i] is the parent of ith node.
// The root of the tree is node 0. Find the kth ancestor of a given node.

// The kth ancestor of a tree node is the kth node in the path from that node to the root node.

class TreeAncestor {
  constructor(n, parents) {
    this.n = n;
    this.parents = parents;
  }

  getKthAncestor(node, k) {
    let i = node;
    while (i >= 0) {
      i = this.parents[i];
      k--;
      if (k == 0) {
        return parent;
      }
    }

    return -1;
  }
}

let treeAncestor = new TreeAncestor(7, [-1, 0, 0, 1, 1, 2, 2]);
const result = treeAncestor.getKthAncestor(6, 3);
console.log("result", result);
