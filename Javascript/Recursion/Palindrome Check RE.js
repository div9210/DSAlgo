function palindromeCheckRE(str, start, end) {
  // Base case
  if (start >= end) {
    return true;
  }

  // Solving one case
  let ans = str[start] == str[end];

  // Recursive call
  return ans && palindromeCheckRE(str, start + 1, end - 1);
}

let str = "abcacba";
console.log(palindromeCheckRE(str, 0, str.length - 1));
