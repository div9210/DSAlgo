/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
    let res = [], part = [];
    let index = 0;
    solve(index);
    return res;

    function solve(index) {
        if (index >= s.length) {
            res.push([...part]);
        }

        for (let j = index; j < s.length; j++) {
            if (checkPalindrome(s.substring(index, j + 1))) {
                part.push(s.substring(index, j + 1));
                solve(j + 1);
                part.pop();
            }
        }
    }

    function checkPalindrome(str) {
        let n = str.length;
        for (let i = 0; i < Math.floor(n / 2); i++) {
            if (str[i] != str[n - i - 1]) return false;
        }

        return true;
    }
};