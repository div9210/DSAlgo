var countSmaller = function (nums) {
    let n = nums.length;
    let count = new Array(n).fill(0);
    let elements = nums.map((n, i) => { return { val: n, index: i }; });

    mergeSort(elements, 0, n - 1);
    return count;

    // Descending Merge Sort
    function mergeSort(nums, start, end) {
        if (start >= end) return;
        let mid = Math.floor((start + end) / 2);

        // Call for left
        mergeSort(nums, start, mid);
        mergeSort(nums, mid + 1, end);

        merge(nums, start, mid, end);
    }

    function merge(nums, start, mid, end) {
        let left = nums.slice(start, mid + 1);
        let right = nums.slice(mid + 1, end + 1);
        let i = 0, j = 0, fillIndex = start;

        while (i < left.length && j < right.length) {
            if (left[i].val > right[j].val) {
                count[left[i].index] += right.length - j;
                nums[fillIndex] = left[i];
                i++;
            } else {
                nums[fillIndex] = right[j];
                j++;
            }
            fillIndex++;
        }

        // If there are remaining elements in left
        while (i < left.length) {
            nums[fillIndex] = left[i];
            i++;
            fillIndex++;
        }

        // If there are remaining elements in right
        while (j < right.length) {
            nums[fillIndex] = right[j];
            j++;
            fillIndex++;
        }
    }
};


let nums = [5, 2, 6, 1];
countSmaller(nums);