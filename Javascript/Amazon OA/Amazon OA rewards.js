class Solution {
    maxReward(rewards) {
        let n = rewards.length;
        // greedy
        rewards.sort((a, b) => b - a);

        let totalReward = 0, attempts = 0;
        for (let i = 0; i < n; i++) {
            // Pick the ith reward, and consider it gone forever
            let earned = rewards[i] - attempts;
            if (earned >= 0)
                totalReward += earned;
            attempts++;
        }

        return totalReward;
    }
}

let sol = new Solution();
let res = sol.maxReward([5, 5, 2, 2, 3, 1]);
console.log('result', res);