function printAllSubsequences(arr, index, curr) {
  if (index >= arr.length) {
    console.log(curr);
    return;
  }

  curr.push(arr[index]);
  printAllSubsequences(arr, index + 1, curr);

  curr.pop();
  printAllSubsequences(arr, index + 1, curr);
}

function printSubsequencesThatAreEqualToK(arr, index, K, subsq, currSum) {
  if (index >= arr.length) {
    if (currSum == K) console.log(subsq);
    return;
  }

  // Include the current number and move to the next call
  subsq.push(arr[index]);
  printSubsequencesThatAreEqualToK(
    arr,
    index + 1,
    K,
    subsq,
    currSum + arr[index]
  );

  // Exclude the current number and move to the next call
  subsq.pop();
  printSubsequencesThatAreEqualToK(arr, index + 1, K, subsq, currSum);
}

function printOnlyOneSubsqEqualToSum(arr, index, sum, subsq, currSum) {
  // Base Case
  if (index >= arr.length) {
    if (currSum === sum) {
      console.log(subsq);
      return true;
    } else {
      return false;
    }
  }

  // Include the current number in the subsq
  subsq.push(arr[index]);
  let includeAns = printOnlyOneSubsqEqualToSum(
    arr,
    index + 1,
    sum,
    subsq,
    currSum + arr[index]
  );
  if (includeAns) return includeAns;

  // Exclude the current number from the subsq
  subsq.pop();
  let excludeAns = printOnlyOneSubsqEqualToSum(
    arr,
    index + 1,
    sum,
    subsq,
    currSum
  );
  return excludeAns;
}

function countSubsequencesWhoseSumIsK(arr, K, index, currSum) {
  if (index >= arr.length) {
    if (currSum == K) return 1;
    else return 0;
  }

  // Try including the current number and count ahead
  let include = countSubsequencesWhoseSumIsK(
    arr,
    K,
    index + 1,
    currSum + arr[index]
  );

  // Try excluding the current number and count ahead
  let exclude = countSubsequencesWhoseSumIsK(arr, K, index + 1, currSum);

  return include + exclude;
}

// printAllSubsequences([3, 1, 2], 0, []);
printSubsequencesThatAreEqualToK([1, 2, 3, 4, 5], 0, 6, [], 0);
// printOnlyOneSubsqEqualToSum([1, 2, 3, 4, 5], 0, 9, [], 0);

let subsqCount = countSubsequencesWhoseSumIsK([1, 2, 3, 4, 5], 6, 0, 0);
console.log({ subsqCount });
