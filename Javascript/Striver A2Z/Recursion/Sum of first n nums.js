class Solution {
  sumOfFirstN(n) {
    if (n < 1) return 0;

    return n + this.sumOfFirstN(n - 1);
  }
}

let sol = new Solution();
let ans = sol.sumOfFirstN(3, 0);
console.log("ans", ans);
