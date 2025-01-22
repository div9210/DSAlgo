class Solution {
    //Function to check whether the given graph is a tree or not.
    isTree(n, adj) {
        let visited = new Array(n).fill(false);

        // Check for all the disconnected components
        let count = 0;
        for (let node = 0; node < n; node++) {
            if (!visited[node]) {
                count++;
                let isCycle = checkCycleDfs(node);
                if (isCycle) return false;
            }
        }

        if (count > 1) return false;
        else return true;

        function checkCycleDfs(src, parent) {
            // Mark src as visited
            visited[src] = true;

            // Visit all of the unvisited neighbours
            for (let nbr of adj[src]) {
                if (!visited[nbr]) {
                    let checkFurther = checkCycleDfs(nbr, src);
                    if (checkFurther) return true;
                } else if (visited[nbr] == true && nbr != parent) {
                    return true
                }
            }
            return false;
        }
    }
}