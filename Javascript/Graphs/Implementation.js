// There are two types of graph creation
// 1. Using Adjacency Matrix
// 2. Using Adjacency List

// Graph Implementation - Using Adjacency List
// class Graph {
//   constructor() {
//     this.edgeMap = new Map();
//   }

//   addEdges(u, v, direction) {
//     // Direction 1 -> one way u -> v or v -> u
//     // Direction 0 -> two way u - v or v - u (without arrows)
//     if (direction == 1) {
//       // Add one way edge in edgeMap u -> v\
//       if (this.edgeMap.has(u)) {
//         let newEdgeList = this.edgeMap.get(u);
//         newEdgeList.push(v);
//         this.edgeMap.set(u, newEdgeList);
//       } else {
//         // First time
//         this.edgeMap.set(u, [v]);
//       }
//     } else {
//       // Add two way edge in edgeMap u - v and v - u
//       // u - v
//       if (this.edgeMap.has(u)) {
//         let newEdgeList = this.edgeMap.get(u);
//         newEdgeList.push(v);
//         this.edgeMap.set(u, newEdgeList);
//       } else {
//         // First time
//         this.edgeMap.set(u, [v]);
//       }

//       // v - u
//       if (this.edgeMap.has(v)) {
//         let newEdgeList = this.edgeMap.get(v);
//         newEdgeList.push(u);
//         this.edgeMap.set(v, newEdgeList);
//       } else {
//         // First time
//         this.edgeMap.set(v, [u]);
//       }
//     }
//   }

//   print() {
//     let printableOutput = "";
//     for (let [key, value] of this.edgeMap) {
//       printableOutput += `For element ${key}\nNeighbours :`;
//       for (let e of value) {
//         printableOutput += " | " + e + " | ";
//       }
//       printableOutput += "\n\n";
//     }

//     console.log(printableOutput);
//   }
// }

// let graph = new Graph();
// graph.addEdges(1, 2, 1);
// graph.addEdges(1, 3, 0);
// graph.addEdges(1, 4, 1);
// graph.addEdges(2, 3, 1);
// graph.addEdges(3, 4, 1);
// graph.print();

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
