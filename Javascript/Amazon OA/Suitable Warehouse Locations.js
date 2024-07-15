var suitableWareshouse = function (center, d) {
    center.sort((a, b) => a - b);
    let n = center.length;

    // find the mid element
    let mid = Math.floor(n / 2);
    let midPos = center[mid];
    // Check if midPos is a correct position
    let distanceForMid = totalDistance(midPos);
    if (distanceForMid > d) return 0;

    // If possible search from left and right
    let suitablePos = 1;
    let left = midPos - 1;
    let right = midPos + 1;

    // Expand the left and right
    while (totalDistance(left) <= d) {
        suitablePos++;
        left--;
    }

    while (totalDistance(right) <= d) {
        suitablePos++;
        right++;
    }

    return suitablePos;



    function totalDistance(x) {
        let total = 0;
        for (let pos of center) {
            total += 2 * Math.abs(x - pos);
        }
        return total;
    }
}

let center = [-2, 1, 0], d = 8;
console.log(suitableWareshouse(center, d));