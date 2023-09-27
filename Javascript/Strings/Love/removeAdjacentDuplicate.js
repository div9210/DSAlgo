var removeDuplicates = function (s) {
  let ansString = "";
  // loop over the string
  for (let i = 0; i < s.length; i++) {
    if (ansString[ansString.length - 1] === s[i]) {
      ansString = ansString.slice(0, -1); // Remove last character from string
    } else {
      ansString += s[i];
    }
  }

  return ansString;
};

const result = removeDuplicates("abbaca");
console.log("result", result);
