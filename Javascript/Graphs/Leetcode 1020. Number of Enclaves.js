/**
 * @param {number[][]} grid
 * @return {number}
 */
var numEnclaves = function (grid) {
    // Reverse engineering method
    let rows = grid.length;
    let cols = grid[0].length;
    // let visited = new Array(rows).fill().map(() => Array(cols).fill(false));

    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (atBorder(row, col) && grid[row][col] == 1) {
                dfsMarkNotEnclave(row, col);
            }
        }
    }

    let enclaves = 0;
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 1) {
                enclaves++;
            }
        }
    }

    return enclaves;

    function dfsMarkNotEnclave(x, y) {
        // Mark src as visited
        // visited[x][y] = true;
        grid[x][y] = -1; // Cannot be a part of enclave

        for (let [dx, dy] of directions) {
            let newx = x + dx;
            let newy = y + dy;

            if (inBounds(newx, newy) && grid[newx][newy] == 1) {
                dfsMarkNotEnclave(newx, newy);
            }
        }
    }

    function inBounds(x, y) {
        return x >= 0 && x < rows && y >= 0 && y < cols;
    }

    function atBorder(row, col) {
        return row == 0 || col == 0 || row == rows - 1 || col == cols - 1;
    }
};