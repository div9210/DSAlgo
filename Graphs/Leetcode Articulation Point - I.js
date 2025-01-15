class Solution {
    // Function to find articulation points in an undirected graph.
    articulationPoints(V, adjList) {

        let tin = new Array(V).fill(0);
        let low = new Array(V).fill(0);

        let visited = new Array(V).fill(false);
        let mark = new Array(V).fill(false);
        dfs(0, -1, 1); // src, parent, timer

        let articulationPoints = [];
        for (let i = 0; i < V; i++) {
            if (mark[i]) articulationPoints.push(i);
        }

        if (articulationPoints.length > 0) return articulationPoints;
        else return [-1];


        function dfs(src, parent, timer) {
            visited[src] = true;

            tin[src] = timer;
            low[src] = timer;
            timer++;

            let child = 0;
            for (let nbr of adjList[src]) {
                if (nbr != parent) {
                    if (!visited[nbr]) {
                        child++;
                        // 1. Make the dfs call
                        dfs(nbr, src, timer);

                        // 2. While coming back, update the low
                        low[src] = Math.min(low[src], low[nbr]);

                        // 3. Check the articulation
                        if (low[nbr] >= tin[src] && parent != -1) {
                            mark[src] = true;
                        }
                    } else {
                        low[src] = Math.min(low[src], tin[nbr]);
                    }
                }
            }

            if (child > 1 && parent == -1) {
                mark[src] = true;
            }
        }
    }
}