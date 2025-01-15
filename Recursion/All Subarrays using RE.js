function printSubArrays(nums, start) {
  if (start === nums.length) {
    return;
  }

  let end = start + 1;
  while (end <= nums.length) {
    let sliced = nums.slice(start, end);
    // console.log(sliced);
    result.push(sliced);
    end++;
  }

  // Recursive call
  printSubArrays(nums, start + 1);
}
let result = [];
printSubArrays([1, 2, 3, 4, 5], 0, result);
console.log(result);
