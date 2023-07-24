class Solution {
    public int[] twoSum(int[] nums, int target) {
        Map<Integer, Integer> map = new HashMap<Integer, Integer>();
        int[] result = new int[2];
         // loop over the nums array
         for(int i = 0; i < nums.length; i++) {
            int minusTarget = target - nums[i];
            if(map.containsKey(minusTarget)) {
                result[0] = map.get(minusTarget);
                result[1] = i;
                return result;
            }else {
                map.put(nums[i], i);
            }
         }
         return result;
    }
}