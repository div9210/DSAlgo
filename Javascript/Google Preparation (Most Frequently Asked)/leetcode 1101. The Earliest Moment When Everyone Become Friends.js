export class Solution {
    /**
     * @param logs: Logging with time, x, y
     * @param n: Total count of people
     * @return: Timestamp of when everyone became friends
     */
    earliestAcq(logs, n) {
        let dset = new DS(n);
        logs.sort((a, b) => a[0] - b[0]);

        let earliestTime = -1
        for (let log of logs) {
            let [time, A, B] = log;

            let didUnionHappen = dset.union(A, B);
            if (didUnionHappen) {
                earliestTime = Math.max(time, earliestTime);
            }
        }

        return earliestTime;
    }
}
class DS {
    constructor(n) {
        this.size = new Array(n).fill(0);
        this.parent = new Array(n).fill().map((e, i) => i);
    }

    findRootParent(node) {
        if (node == this.parent[node]) {
            return node; // Boss node
        }

        // Find recursively the boss node, and also perform "Path Compression"
        return this.parent[node] = this.findRootParent(this.parent[node]);
    }

    union(u, v) {
        let up = this.findRootParent(u);
        let vp = this.findRootParent(v);

        if (up != vp) {
            if (this.size[up] > this.size[vp]) {
                this.parent[vp] = up;
                this.size[up] += this.size[vp];
            } else {
                this.parent[up] = vp;
                this.size[vp] += this.size[up];
            }

            return true; // Union happened
        } else {
            return false; // Union did not happen
        }
    }
}