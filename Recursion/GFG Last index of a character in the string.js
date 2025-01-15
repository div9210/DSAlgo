class Solution {
  LastIndex(s, p) {
    const sol = this.solve(s, p, 0, -1);
    return sol;
  }
  solve(s, target, index, lastAns) {
    // Base case
    if (index >= s.length) {
      return lastAns;
    }

    // Processing
    if (s[index] == target && index >= lastAns) {
      lastAns = index;
    }

    // Recursive call
    return this.solve(s, target, index + 1, lastAns);
  }
}

const solve = new Solution();
console.log(solve.LastIndex("helloF worFd EE F d", "F"));
