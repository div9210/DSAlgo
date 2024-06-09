export class Solution {
    /**
     * @param num: a string
     * @return: true if a number is strobogrammatic or false
     */
    isStrobogrammatic(num) {
        let map = new Map([
            ["0", "0"],
            ["1", "1"],
            ["6", "9"],
            ["9", "6"],
            ["8", "8"]
        ]);

        let start = 0;
        let end = num.length - 1;

        while (start <= end) {
            if (!map.has(num[start])) return false;

            // If our map has the char
            let sg = map.get(num[start]);
            if (sg != num[end]) return false;

            start++;
            end--;
        }

        return true;
    }
}