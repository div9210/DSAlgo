class Recursion {
  print1ToN(n) {
    if (n == 0) {
      // Stop
      return;
    }

    this.print1ToN(n - 1);
    console.log(n, " ");
    return;
  }

  powerOf2ToN(n) {
    if (n == 1) {
      // This is the final recursive call thus return
      return 2;
    }

    let recursiveAns = this.powerOf2ToN(n - 1);

    return 2 * recursiveAns;
  }

  climbStairs(n) {
    if (n == 0) {
      return 0;
    }

    if (n == 1) {
      return 1;
    }

    return this.climbStairs(n - 1) + this.climbStairs(n - 2);
  }

  evenNums(arr, index, resultArray) {
    if (index >= arr.length) {
      return;
    }
    if (arr[index] % 2 == 0) {
      resultArray.push(arr[index]);
    }

    // Recursive call for index + 1
    this.evenNums(arr, index + 1, resultArray);

    return arr;
  }

  maxNumInArray(arr, index) {
    if (index == arr.length - 1) {
      return arr[index];
    }

    return Math.max(arr[index], this.maxNumInArray(arr, index + 1));
  }

  doubleArray(arr, index) {
    if (index >= arr.length) {
      return;
    }

    // Processing
    arr[index] = arr[index] * 2;

    // Recursive call
    this.doubleArray(arr, index + 1);
  }

  checkSorted(arr, index) {
    // Base Cases
    if (index >= arr.length) {
      return true;
    }

    if (index != 0 && arr[index] < arr[index - 1]) {
      return false;
    }

    return this.checkSorted(arr, index + 1);
  }

  binarySearch(arr, target, start, end) {
    let mid = Math.floor(start + (end - start) / 2);

    // Base Case
    if (start > end) {
      return -1;
    }

    if (arr[mid] == target) {
      return mid;
    }

    // Recursive call
    if (target > arr[mid]) {
      start = mid + 1;
      return this.binarySearch(arr, target, start, end);
    } else {
      end = mid - 1;
      return this.binarySearch(arr, target, start, end);
    }
  }

  findSubsequences(str, resultStr, index, subs) {
    if (index >= str.length) {
      subs.push(resultStr);
      // console.log(resultStr);
      return;
    }

    // One call for exclusion i.e leave resultStr as it is
    this.findSubsequences(str, resultStr, index + 1, subs);

    // One call for inclusion of current char i.e str[index]
    this.findSubsequences(str, resultStr + str[index], index + 1, subs);
  }

  coinChange(coins, amount) {
    // Base Cases
    if (amount == 0) {
      return 0;
    }

    if (amount < 0) {
      return -1;
    }

    // Processing and recursive calls
    coins.forEach((c) => {
      this.coinChange(coins, amount - c);
    });
  }
}

const r = new Recursion();
// r.print1ToN(5);

// let arr = [1, 2, 3, 4, 5, 6, 8, 7];
// let resultArray = [];
// let index = 0;
// r.evenNums(arr, index, resultArray);
// console.log("resultArray", resultArray);

// console.log(
//   "Max Num :",
//   r.maxNumInArray([1, 4, 100, 101, 200, 150, 3, 4, 7, 8], 0)
// );

// r.doubleArray(arr, 0);
// console.log(arr);

// console.log("checkSorted", r.checkSorted(arr, 1));

// console.log("Binary search index:", r.binarySearch([1, 2, 3, 4, 5], 3, 0, 4));
// console.log(r.powerOf2ToN(4));
let subsequences = [];
r.findSubsequences("abcd", "", 0, subsequences);
console.log("subsequences", subsequences);
