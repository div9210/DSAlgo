/**
 * @param {number} x
 * @param {number} y
 * @param {number} target
 * @return {boolean}
 */
var canMeasureWater = function (x, y, target) {
    if (x + y < target) return false;

    // Check if target is a multiple of HCF / GCD of the x and y
    return target % gcd(x, y) == 0;

    function gcd(x, y) {
        if (y == 0) return x;

        return gcd(y, x % y);
    }
};