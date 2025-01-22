function findLongestPalindromicSubstring(s, i, j) {
  let maxPalindrome = "";
  // while i and j are not out of bound
  // Expand left and right
  while (i >= 0 && j < s.length && s[i] == s[j]) {
    // maxPalindrome --> s from i --> j
    maxPalindrome = s.substr(i, j - i + 1);
    i--;
    j++;
  }

  return maxPalindrome;
}

var longestPalindrome = function (s) {
  // Loop over the s and find the possible odd and even palindromic substrings from that position
  let maxLengthString = "";
  for (let i = 0; i < s.length; i++) {
    let oddP = findLongestPalindromicSubstring(s, i, i);
    let evenP = findLongestPalindromicSubstring(s, i, i + 1);

    // Only the palindrome with max Length will be stored
    let maxFromOddEven = oddP.length >= evenP.length ? oddP : evenP;
    maxLengthString =
      maxFromOddEven.length >= maxLengthString.length
        ? maxFromOddEven
        : maxLengthString;
  }

  return maxLengthString;
};

console.log(longestPalindrome("babad"));
