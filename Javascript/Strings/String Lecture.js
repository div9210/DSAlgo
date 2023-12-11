// Named algorithms in string to find a pattern
// String erase function implementation
// 539 : LeetCode
// 647: palindromic substrings : HW : Find the time and space complexity of the below solution
function expand(s, i, j) {
  let count = 0;
  while (i >= 0 && j < s.length && s[i] == s[j]) {
    i--;
    j++;
    count++;
  }
  return count;
}

var countSubstrings = function (s) {
  // Treating every point as a center point and expanding outwards
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let oddAns = expand(s, i, i);
    let evenAns = expand(s, i, i + 1);
    count += oddAns + evenAns;
  }

  return count;
};
