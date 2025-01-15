/**
 * @param {number[]} nums
 * @return {boolean}
 */
var canTraverseAllPairs = function (nums) {
    // form the graph edges
    let n = nums.length
    let ds = new DisjointSet(n);
    for (let i = 0; i < nums.length; i++) {
        for (let j = 0; j < nums.length; j++) {
            if (i == j) continue;

            if (gcd(nums[i], nums[j]) > 1) {
                ds.union(i, j);
            }
        }
    }

    // Find the number of connected components in the graph
    // If that is more than one that means all nodes are not reachable
    let components = 0;
    for (let node = 0; node < n; node++) {
        if (ds.findRootParent(node) == node) components++;
    }

    if (components == 1) return true;
    return false;

    function gcd(x, y) {
        if (y == 0) return x;

        return gcd(y, x % y);
    }
};

class DisjointSet {
    constructor(n) {
        this.size = new Array(n).fill(1);
        this.parent = new Array(n).fill().map((e, i) => i);
    }

    findRootParent(node) {
        if (node == this.parent[node]) return node; // Boss Parent

        // Search ahead for boss parent and perform "Path compression"
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

            return true // Union Happened
        } else {
            // Already same parent
            // i.e already part of same component
            return false; // Union did not happen
        }
    }
}