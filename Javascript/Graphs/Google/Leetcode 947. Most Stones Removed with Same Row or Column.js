/**
 * @param {number[][]} stones
 * @return {number}
 */
var removeStones = function (stones) {
    // A grid is formed by maximum row and maximum col from stones
    let n = stones.length;
    let maxRow = 0;
    let maxCol = 0;

    for (let [x, y] of stones) {
        maxRow = Math.max(maxRow, x);
        maxCol = Math.max(maxCol, y);
    }

    let ds = new DisjointSet(maxRow + maxCol + 2);
    let newStonesPos = new Set();
    for (let [row, col] of stones) {
        let nodeRow = row;
        let nodeCol = col + maxRow + 1;

        ds.union(nodeRow, nodeCol);

        newStonesPos.add(nodeRow);
        newStonesPos.add(nodeCol);
    }

    let components = 0;
    for (let node of Array.from(newStonesPos)) {
        if (ds.findRootParent(node) == node) components++;
    }

    return n - components;
};

class DisjointSet {
    constructor(size) {
        this.size = new Array(size).fill(1);
        this.parent = new Array(size).fill().map((e, i) => i);
    }

    findRootParent(node) {
        if (node == this.parent[node]) return node;

        return this.parent[node] = this.findRootParent(this.parent[node]);
    }

    union(u, v) {
        let uParent = this.findRootParent(u);
        let vParent = this.findRootParent(v);

        if (uParent != vParent) {
            if (this.size[uParent] > this.size[vParent]) {
                this.parent[vParent] = uParent;
                this.size[uParent] += this.size[vParent];
            } else {
                this.parent[uParent] = vParent;
                this.size[vParent] += this.size[uParent];
            }
        }
    }
}