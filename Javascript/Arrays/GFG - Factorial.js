class Solution {
  factorial(N) {
    //code here
    let fact = BigInt(1);
    for (let i = 1n; i <= BigInt(N); i++) {
      fact = fact * i;
    }
    return [fact];
  }
}

const sol = new Solution();
const result = sol.factorial(897);
console.log("result", result);
