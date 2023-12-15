var strStr = function (haystack, needle) {
  for (let i = 0; i < haystack.length; i++) {
    if (haystack[i] === needle[0]) {
      if (needle.length === 1) {
        return i;
      }
      for (let j = 1; j < needle.length; j++) {
        if (haystack[i + j] == needle[j]) {
          if (j == needle.length - 1) {
            return i;
          }
        } else {
          break;
        }
      }
    }
  }

  return -1;
};

let haystack = "a",
  needle = "a";

console.log(strStr(haystack, needle));
