var longestCommonPrefix = function (strs) {
  let resultStr = strs[0];
  // Looping over the strings
  for (let i = 1; i < strs.length; i++) {
    for (let j = 0; j < resultStr.length; j++) {
      if (strs[i][j] !== resultStr[j]) {
        // Remove the char from  resultStr
        resultStr = resultStr.substr(0, j);
        break;
      }
    }
  }

  return resultStr;
};

let strs = ["flower", "flow", "flight"];
console.log(longestCommonPrefix(strs));
