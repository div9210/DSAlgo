var isValid = function (s) {
  let sArr = s.split("");
  let stack = require("buckets-js").Stack(); // '(', ')', '{', '}', '[' and ']'
  for (let i = 0; i < sArr.length; i++) {
    if (sArr[i] == "(" || sArr[i] == "{" || sArr[i] == "[") {
      stack.push(sArr[i]);
    } else if (sArr[i] == ")" || sArr[i] == "}" || sArr[i] == "]") {
      let topEl = stack.peek();
      if (
        (sArr[i] == ")" && topEl == "(") ||
        (sArr[i] == "}" && topEl == "{") ||
        (sArr[i] == "]" && topEl == "[")
      ) {
        stack.pop();
      } else {
        return false;
      }
    } else {
      return false;
    }
  }

  return true;
};
