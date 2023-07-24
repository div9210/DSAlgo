class Solution {
  //Function to find the sum of contiguous subarray with maximum sum.
  maxSubarraySum(arr, N) {
    // code here
    let sum = 0;
    let maxSum = arr[0];
    for (let i = 0; i < N; i++) {
      sum = sum + arr[i];
      maxSum = Math.max(sum, maxSum);
      sum = sum <= 0 ? 0 : sum;
    }

    return maxSum;
  }
}
