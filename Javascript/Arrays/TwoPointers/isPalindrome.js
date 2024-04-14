var isPalindrome = function (s) {
  // Remove special chars and spaces
  s = s
    .toLowerCase()
    .split(" ")
    .join()
    .replace(/[^a-z0-9]/g, "");
  for (let i = 0; i < s.length; i++) {
    if (s[i] === s[s.length - 1 - i]) {
      continue;
    } else {
      return false;
    }
  }

  return true;
};

const result = isPalindrome("A man, a plan, a canal: Panama");
console.log("result", result);
