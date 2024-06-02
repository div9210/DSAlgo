/**
 * @param {number[][]} points
 * @return {number}
 */
var minAreaRect = function (points) {
    // Sort all of the points on the basis of the x value
    points.sort((a, b) => a[0] - b[0]);

    let pointset = new Set();
    for (let p of points) {
        pointset.add(p.toString());
    }

    let minArea = Infinity;
    // Try all of the pairs and see if you can form the diagonals
    for (let i = 0; i < points.length; i++) {
        for (let j = i + 1; j < points.length; j++) {
            // Check for this pair
            // can it be a diagonal of a rectangle
            let p1 = points[i];
            let p2 = points[j];

            let [a, b] = p1;
            let [c, d] = p2;

            // if a & c (x coordinates) are different
            // and if b & d (y coordinates) are different
            // Check if set contains [a, d] & [c, b]
            // If yes rectangle can be formed
            if (a != c && b != d && pointset.has([a, d].toString()) && pointset.has([c, b].toString())) {
                let length = Math.abs(a - c);
                let breadth = Math.abs(b - d);
                let area = length * breadth;

                minArea = Math.min(minArea, area);
            }
        }
    }

    return minArea == Infinity ? 0 : minArea;
};