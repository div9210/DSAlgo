/**
 * @param {number[][]} mat
 * @return {number[][]}
 */
var updateMatrix = function (grid) {
    let rows = grid.length;
    let cols = grid[0].length;
    let dist = Array.from({ length: rows }, () => Array(cols).fill(0));
    let vis = Array.from({ length: rows }, () => Array(cols).fill(false));
    let directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

    let q = [];
    for (let row = 0; row < rows; row++) {
        for (let col = 0; col < cols; col++) {
            if (grid[row][col] == 0) {
                q.push([row, col, 0]);
                vis[row][col] = true;
            }
        }
    }

    let front = 0;
    while (front < q.length) {
        let [x, y, distance] = q[front];
        dist[x][y] = distance;
        front++;

        for (let [dx, dy] of directions) {
            let newx = x + dx;
            let newy = y + dy;

            if (newx >= 0 && newx < rows && newy >= 0 && newy < cols && !vis[newx][newy]) {
                vis[newx][newy] = true;
                q.push([newx, newy, distance + 1]);
            }
        }
    }

    return dist;
};