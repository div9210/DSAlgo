class Solution {
  //param A : array of integers
  //return an integer
  dummyConstructFromPreorder(A, iRef, min, max) {
    if (iRef.i >= A.length) return;
    let val = A[iRef.i];
    if (val > min && val < max) {
      iRef.i++;
      // left subtree
      this.dummyConstructFromPreorder(A, iRef, min, val);
      // right subtree
      this.dummyConstructFromPreorder(A, iRef, val, max);
    }
  }
  solve(A) {
    let min = -Infinity;
    let max = Infinity;
    let indexRef = {
      i: 0,
    };

    this.dummyConstructFromPreorder(A, indexRef, min, max);
    return indexRef.i == A.length ? 1 : 0;
  }
}

let sol = new Solution();

let res = sol.solve([5, 3, 1, 2, 8, 7]);
console.log("res", res);
