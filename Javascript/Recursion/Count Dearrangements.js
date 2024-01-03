function solve(n) {
  //base case
  if (n == 1) {
    return 0;
  }
  if (n == 2) {
    return 1;
  }

  let ans = (n - 1) * (solve(n - 1) + solve(n - 2));
  return ans;
}
