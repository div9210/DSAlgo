// https://leetcode.com/problems/valid-palindrome-ii/

// This got stuck at some test cases : Check below
var validPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  let isRemovalChanceUsed = false;
  while (i <= j) {
    if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      // One skip/removal allowed
      // Let's decide which should be skipped i or j
      if (!isRemovalChanceUsed && s[j - 1] == s[i]) {
        // Skip j
        isRemovalChanceUsed = true;
        j--;
      } else if (!isRemovalChanceUsed && s[i + 1] == s[j]) {
        // Skip i
        isRemovalChanceUsed = true;
        i++;
      } else {
        return false;
      }
    }
  }

  return true;
};

const validPalindromeLove = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      // Remove i and check i.e from i+1 to j
      let substr1 = s.substr(i + 1, j - i);
      if (checkPalindrome(substr1)) {
        return true;
      }
      // Remove j and check i.e from i to j-1
      let substr2 = s.substr(i, j - i);
      if (checkPalindrome(substr2)) {
        return true;
      }

      // If code reaches here
      return false;
    }
  }

  return true;
};

const checkPalindrome = function (s) {
  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (s[i] == s[j]) {
      i++;
      j--;
    } else {
      return false;
    }
  }

  return true;
};

const result = validPalindromeLove("ebcbbececabbacecbbcbe");
console.log({
  result,
});
