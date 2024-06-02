/**
 * @param {number[][]} bombs
 * @return {number}
 */
var maximumDetonation = function (bombs) {
    let max = 0
    for (let i = 0; i < bombs.length; i++) {
        const exploded = new Set([i])
        const queue = [bombs[i]]
        while (queue.length > 0) {
            const bomb = queue.shift()
            for (let j = 0; j < bombs.length; j++) {
                if (exploded.has(j)) continue
                let newBomb = bombs[j]
                let distance = EuclideanDistance(bomb[0], bomb[1], newBomb[0], newBomb[1]);

                // If bomb's blast radius is more than the distance between then
                // newBomb will detonate too
                if (bomb[2] >= distance) {
                    queue.push(newBomb)
                    exploded.add(j)
                }
            }
        }
        max = Math.max(exploded.size, max);
    }
    return max;

    function EuclideanDistance(x1, y1, x2, y2) {
        let x = Math.abs(x1 - x2);
        let y = Math.abs(y1 - y2);

        return Math.sqrt(x * x + y * y);
    }
};