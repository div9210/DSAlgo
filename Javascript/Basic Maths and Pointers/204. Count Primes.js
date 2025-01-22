var countPrimes = function (n) {
  if (n == 0) {
    return 0;
  }

  // Make an array of n size where it's index will be
  // denoting the currentNumber
  let range = new Array(n).fill(true);
  //   let count = 0;
  // Looping from i = 0 to n - 1

  // Since for i = anything more than Math.sqrt(n) the j i.e i*i
  // will jump across the range
  // Thus it is stupid to even check that
  // Hence
  //   for (let i = 0; i < n; i++) {
  for (let i = 0; i <= Math.sqrt(n); i++) {
    if (i == 0 || i == 1) {
      range[i] = false;
      continue;
    } else {
      if (range[i] != false) {
        // i is from 2 to n-1
        // And since we are inside the if case thus i has not been marked false
        // by any previous number. So it is prime
        // count++;
        // let j = i + i; // j = 2 * i // Optimistation : start of  j is i*i
        let j = i * i;
        // Marking the table of currentNum as false that comes in range
        while (j < range.length) {
          range[j] = false;
          j += i; // Table of currentNum
        }
      }
    }
  }

  // Count the number of true in range
  let count = 0;
  for (let i = 0; i < range.length; i++) {
    if (range[i]) {
      console.log(i);
      count++;
    }
  }

  return count;
};

console.log("count:", countPrimes(21));
