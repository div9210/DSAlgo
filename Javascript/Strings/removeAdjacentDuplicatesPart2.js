// 1209. Remove All Adjacent Duplicates in String II
// Time limit exceeded
var removeDuplicates = function (s, k) {
  let ansString = "";
  for (let i = 0; i < s.length; i++) {
    if (ansString[ansString.length - 1] === s[i]) {
      // one element is in the string
      // check if k-1 elements are already in the answer string
      let countOfChar = 0;
      for (let j = 0; j < k - 1; j++) {
        if (ansString[ansString.length - j - 1] === s[i]) {
          ++countOfChar;
        }
      }
      if (countOfChar === k - 1) {
        // Slice 0, -(k-1) characters
        ansString = ansString.slice(0, -(k - 1));
      } else {
        ansString += s[i];
      }
    } else {
      ansString += s[i];
    }
  }

  return ansString;
};

const result = removeDuplicates("deeedbbcccbdaa", 3);
