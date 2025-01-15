/**
 * @param {number[][]} grid
 * @return {number}
 */
var largestIsland = function (grid) {
    if (grid.length == 0 || grid[0].length == 0) return 0;
    let n = grid.length;

    // Step 1: Connect the grid into island components
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];
    let ds = new DSU(n * n);
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] == 1) {
                for (let [dx, dy] of directions) {
                    let newx = x + dx;
                    let newy = y + dy;

                    if (inBounds(newx, newy) && grid[newx][newy] == 1) {
                        let node = x * n + y;
                        let visitingNode = newx * n + newy;

                        ds.union(node, visitingNode);
                    }
                }
            }
        }
    }

    // Step 2: Check every zero and try to join it to existing islands
    let maxSize = 0;
    for (let x = 0; x < n; x++) {
        for (let y = 0; y < n; y++) {
            if (grid[x][y] == 0) {
                // Turning it into 1 and checking all directions
                let set = new Set();
                for (let [dx, dy] of directions) {
                    let newx = x + dx;
                    let newy = y + dy;

                    if (inBounds(newx, newy) && grid[newx][newy] == 1) {
                        let visitingNode = newx * n + newy;
                        set.add(ds.findRootParent(visitingNode));
                    }
                }

                // Now we have set of all the unique islands
                let totalSize = 1;
                for (let parent of Array.from(set)) {
                    totalSize += ds.findSize(parent);
                }

                maxSize = Math.max(maxSize, totalSize);
            }
        }
    }

    if (maxSize == 0) {
        maxSize = n * n;
    }

    return maxSize;

    function inBounds(x, y) {
        return x >= 0 && x < n && y >= 0 && y < n;
    }
};

class DSU {
    constructor(n) {
        this.size = new Array(n).fill(1);
        this.parent = new Array(n).fill().map((e, i) => i);
    }

    findSize(node) {
        return this.size[node];
    }

    findRootParent(node) {
        if (node == this.parent[node]) return node;

        return this.parent[node] = this.findRootParent(this.parent[node]);
    }

    union(u, v) {
        let uP = this.findRootParent(u);
        let vP = this.findRootParent(v);

        if (uP != vP) {
            if (this.size[uP] > this.size[vP]) {
                // uP is the boss node
                this.parent[vP] = uP;
                this.size[uP] += this.size[vP];
            } else {
                // vP is the boss node
                this.parent[uP] = vP;
                this.size[vP] += this.size[uP];
            }
        }
    }
}