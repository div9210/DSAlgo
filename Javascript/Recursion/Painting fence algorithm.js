function getPaintWays(n, k) {
  //base case
  if (n == 1) {
    return k;
  }
  if (n == 2) {
    return k + k * (k - 1);
  }

  let ans = (k - 1) * (getPaintWays(n - 1, k) + getPaintWays(n - 2, k));
  return ans;
}
