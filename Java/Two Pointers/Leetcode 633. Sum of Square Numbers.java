class Solution {
    public boolean judgeSquareSum(int c) {
        int left = 0;
        long right = (long) Math.floor(Math.sqrt(c));

        while (left <= right) {
            long sum = (left * left) + (right * right);

            if (sum == c)
                return true;
            else if (sum < c)
                left++;
            else
                right--;
        }

        return false;
    }
}