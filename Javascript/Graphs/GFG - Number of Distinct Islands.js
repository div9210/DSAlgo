class Solution {
    //Function to count the number of distinct islands.
    countDistinctIslands(grid) {
        if (grid.length == 0 || grid[0].length == 0) return 0;

        let rows = grid.length;
        let cols = grid[0].length;

        let visited = new Array(rows).fill().map(() => Array(cols).fill(false));
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        let set = new Set();
        for (let row = 0; row < rows; row++) {
            for (let col = 0; col < cols; col++) {
                if (grid[row][col] == 1 && !visited[row][col]) {
                    let island = [];
                    dfs(row, col, row, col, island);
                    set.add(serializeIsland(island)); // It will remove the duplicates
                }
            }
        }

        return set.size;

        function dfs(x, y, x0, y0, island) {
            // Mark the src as visited
            visited[x][y] = true;
            island.push([x - x0, y - y0]);

            for (let [dx, dy] of directions) {
                let newx = x + dx;
                let newy = y + dy;

                if (inBounds(newx, newy) && !visited[newx][newy] && grid[newx][newy] == 1) {
                    dfs(newx, newy, x0, y0, island);
                }
            }
        }

        function inBounds(x, y) {
            return x >= 0 && x < rows && y >= 0 && y < cols;
        }

        function serializeIsland(island) {
            return island.map(coord => coord.join(',')).join(';');
        }
    }
}