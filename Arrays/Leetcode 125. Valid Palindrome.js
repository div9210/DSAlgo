/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function (s) {
  if (s.length === 0) return true;
  s = s.toLowerCase();
  let cleanStr = "";
  for (let i = 0; i < s.length; i++) {
    let charCode = s.charCodeAt(i);
    if (
      (charCode >= 97 && charCode <= 122) ||
      (charCode >= 48 && charCode <= 57)
    ) {
      cleanStr += s[i];
    }
  }
  for (let i = 0; i < cleanStr.length; i++) {
    if (cleanStr[i] === cleanStr[cleanStr.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};
