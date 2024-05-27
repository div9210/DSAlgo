class Solution {
    //Function to count the number of islands.
    numOfIslands(rows, cols, operators) {
        let ds = new DSU(rows * cols);

        let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // Clockwise direction
        let result = [];
        let count = 0;
        let visited = new Array(rows).fill().map(() => Array(cols));
        for (let query of operators) {
            let [row, col] = query;
            if (visited[row][col]) {
                result.push(count);
            } else {
                visited[row][col] = true;
                count++;

                // Now travel to all four directions
                // And see if you can connect the islands
                for (let [dx, dy] of directions) {
                    let newr = row + dx;
                    let newc = col + dy;

                    // Check if at the new position there is an island
                    if (inBounds(newr, newc) && visited[newr][newc] == true) {
                        let node = row * cols + col;
                        let visitingNode = newr * cols + newc;

                        if (ds.findRootParent(node) != ds.findRootParent(visitingNode)) {
                            ds.union(node, visitingNode);
                            count--;
                        }
                    }
                }

                // Once you are done with all the four directions
                // your ans for this query is in the count
                result.push(count);
            }
        }

        return result;

        function inBounds(x, y) {
            return x >= 0 && x < rows && y >= 0 && y < cols;
        }
    }
}

class DSU {
    constructor(n) {
        this.size = new Array(n).fill(1);
        this.parent = new Array(n).fill().map((e, i) => i);
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
};