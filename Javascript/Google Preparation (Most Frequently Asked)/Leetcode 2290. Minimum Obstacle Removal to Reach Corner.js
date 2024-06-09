/**
 * @param {number[][]} grid
 * @return {number}
 */
var minimumObstacles = function (grid) {
    const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]]; // UP RIGHT DOWN LEFT
    const rows = grid.length;
    const cols = grid[0].length;

    // Priority queue to store the cells to be visited
    let pq = new MinPriorityQueue({ priority: x => x[2] });

    // Distance array to store minimum obstacles encountered to reach each cell
    let distance = Array.from({ length: rows }, () => Array(cols).fill(Infinity));
    distance[0][0] = 0;

    // Push the starting point into the queue
    pq.enqueue([0, 0, 0]);

    while (!pq.isEmpty()) {
        let [x, y, obstacles] = pq.dequeue().element;

        // If we've reached the bottom-right cell
        if (x === rows - 1 && y === cols - 1) {
            return obstacles;
        }

        // Explore all 4 directions
        for (let [dx, dy] of directions) {
            let newx = x + dx;
            let newy = y + dy;

            if (inBounds(newx, newy)) {
                let newObstacleCount = obstacles + grid[newx][newy];

                // If this path offers a better route (fewer obstacles), update and add to queue
                if (newObstacleCount < distance[newx][newy]) {
                    distance[newx][newy] = newObstacleCount;
                    pq.enqueue([newx, newy, newObstacleCount]);
                }
            }
        }
    }

    return -1; // If somehow no path is found, although problem guarantees one

    function inBounds(newx, newy) {
        return newx >= 0 && newx < rows && newy >= 0 && newy < cols;
    }
};

