var minCostConnectPoints = function (points) {
  // Initialize parent and rank arrays for disjoint set
  const n = points.length;
  let parent = new Array(n).fill(-1);
  // Let each node be it's own parent
  for (let i = 0; i < n; i++) {
    parent[i] = i;
  }

  let rank = new Array(n).fill(0);
  // Create graph edges using distance
  let edges = [];
  for (let i = 0; i < n - 1; i++) {
    for (let j = i + 1; j < n; j++) {
      edges.push({
        src: i,
        dest: j,
        distance: ManhattanDistance(points[i], points[j]),
      });
    }
  }

  edges.sort((a, b) => a.distance - b.distance);

  // Now run through every edge
  let totalCost = 0;
  for (let e of edges) {
    let { src, dest, distance } = e;
    // Do union
    let isUnion = union(src, dest, rank, parent);
    if (isUnion) {
      totalCost += distance;
    }
  }

  return totalCost;

  function ManhattanDistance(p1, p2) {
    return Math.abs(p1[0] - p2[0]) + Math.abs(p1[1] - p2[1]);
  }
  function findRootParent(node, parent) {
    if (node == parent[node]) return node;

    return (parent[node] = findRootParent(parent[node], parent));
  }

  function union(u, v, rank, parent) {
    let uParent = findRootParent(u, parent);
    let vParent = findRootParent(v, parent);

    if (uParent != vParent) {
      if (rank[uParent] > rank[vParent]) {
        parent[vParent] = uParent;
        rank[uParent]++;
      } else {
        parent[uParent] = vParent;
        rank[vParent]++;
      }

      return true; // Union happened
    } else {
      return false; // Union did not happen
    }
  }
};
