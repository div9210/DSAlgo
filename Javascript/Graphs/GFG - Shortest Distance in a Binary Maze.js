class Solution {
    shortestPath(grid, source, destination) {
        const directions = [[-1, 0], [0, 1], [1, 0], [0, -1]];

        let dist = Dijkstra();

        return dist[destination[0]][destination[1]] == Infinity ? -1 : dist[destination[0]][destination[1]];


        function Dijkstra() {
            let distances = new Array(grid.length).fill().map(() => Array(grid[0].length).fill(Infinity));

            let q = [];
            let [srcx, srcy] = source;
            q.push([srcx, srcy, 0]); // [x, y, distance]
            distances[srcx][srcy] = 0;

            while (q.length > 0) {
                let front = q.shift();
                let [x, y, distance] = front;

                for (let [dx, dy] of directions) {
                    let newx = x + dx;
                    let newy = y + dy;

                    if (inBounds(newx, newy) && grid[newx][newy] == 1 && distance + 1 < distances[newx][newy]) {
                        // Update
                        q.push([newx, newy, distance + 1]);
                        distances[newx][newy] = distance + 1;
                    }
                }
            }

            return distances;
        }

        function inBounds(x, y) {
            return x >= 0 && x < grid.length && y >= 0 && y < grid[0].length;
        }
    }
}


