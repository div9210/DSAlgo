// Class - Strings Week (Solution)

var longestPalindrome = function (s) {
  // Loop over the s and find the possible odd and even palindromic substrings from that position
  let maxStr = "";
  for (let i = 0; i < s.length; i++) {
    // Find palindromes from each index
    let oddP = findLongestPalindromicSubstring(i, i);
    let evenP = findLongestPalindromicSubstring(i, i + 1);

    if (oddP.length > maxStr.length) {
      maxStr = oddP;
    }

    if (evenP.length > maxStr.length) {
      maxStr = evenP;
    }
  }

  return maxStr;

  function findLongestPalindromicSubstring(i, j) {
    // let maxPalindrome = "";
    // while i and j are not out of bound
    // Expand left and right
    while (i >= 0 && j < s.length && s[i] == s[j]) {
      // maxPalindrome --> s from i --> j
      // maxPalindrome = s.substr(i, j - i + 1);
      i--;
      j++;
    }

    return s.substr(i, j - i + 1);

    // return maxPalindrome;
  }
};
