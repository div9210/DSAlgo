// There are two types of graph creation
// 1. Using Adjacency Matrix
// 2. Using Adjacency List

// Graph Implementation - Using Adjacency List

class Graph {
  constructor() {
    this.edges = new Map();
    this.srcNode = null;
  }

  setUnidirection(from, to, weight) {
    if (this.edges.has(from)) {
      let prevEdges = this.edges.get(from);
      prevEdges.push({ neighbour: to, weight: weight });
      this.edges.set(from, prevEdges);
    } else {
      // First time
      this.edges.set(from, [{ neighbour: to, weight: weight }]);
    }
  }

  addEdge(u, v, direction, weight = 1) {
    if (this.srcNode == null) {
      // Set u from edges as srcNode
      this.srcNode = u;
    }
    // We have to set u to v irrespective of the direction
    // So setting that
    this.setUnidirection(u, v, weight);
    // But if direction is 0 there will also be an edge from v to u
    if (direction == 0) {
      this.setUnidirection(v, u, weight);
    }
  }

  print() {
    let printableOutput = "";
    for (let [key, value] of this.edges) {
      printableOutput += `For element ${key}\nNeighbours : `;
      for (let e of value) {
        printableOutput += e.neighbour + " | ";
      }
      printableOutput += "\n\n";
    }

    console.log(printableOutput);
  }
}

// const wG = new Graph();
// wG.addEdge(1, 2, 0, 5);
// wG.addEdge(1, 3, 1, 5);
// wG.addEdge(2, 3, 0, 4);
// wG.print();

module.exports = {
  Graph,
};
