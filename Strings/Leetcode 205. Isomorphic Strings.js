function mappedToPattern(str) {
  let currentChar = "a";
  let map = new Map();
  let patternString = "";

  for (let i = 0; i < str.length; i++) {
    if (!map.has(str[i])) {
      map.set(str[i], currentChar);
      patternString += currentChar;
      currentChar = String.fromCharCode(currentChar.charCodeAt(0) + 1);
    } else {
      patternString += map.get(str[i]);
    }
  }

  return patternString;
}
var isIsomorphic = function (s, t) {
  let sMapped = mappedToPattern(s);
  let tMapped = mappedToPattern(t);

  if (sMapped == tMapped) {
    return true;
  } else {
    return false;
  }
};

console.log(isIsomorphic("ldda", "abbc"));
