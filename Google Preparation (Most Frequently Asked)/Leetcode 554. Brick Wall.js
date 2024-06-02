/**
 * @param {number[][]} wall
 * @return {number}
 */
var leastBricks = function (wall) {
    let n = wall.length
    let gap = {};
    let maxGap = 0;
    for (let i = 0; i < n; i++) {
        let brickLine = wall[i];
        let pos = 0;
        for (let j = 0; j < brickLine.length - 1; j++) {
            pos += brickLine[j];
            if (!gap[pos]) gap[pos] = 0;
            gap[pos]++;

            maxGap = Math.max(maxGap, gap[pos]);
        }
    }

    // Now we know gap + bricks(cut through) = wall.length
    // So bricks(cut through) = wall.length - gap
    let crossedBricks = n - maxGap;
    return crossedBricks;
};