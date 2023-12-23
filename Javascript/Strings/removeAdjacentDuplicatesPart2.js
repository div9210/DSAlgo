// 1209. Remove All Adjacent Duplicates in String II
// Time limit exceeded
var removeDuplicates = function (s, k) {
  let ansString = "";
  for (let i = 0; i < s.length; i++) {
    if (ansString[ansString.length - 1] === s[i]) {
      // one element is in the string
      // check if k-2 elements are already in the answer string
      let toCheck = k - 2; // One element is already checked in the just above if case
      let elementsChecked = 1;
      while (toCheck) {
        if (ansString[ansString.length - 1 - elementsChecked] === s[i]) {
          toCheck--;
          elementsChecked++;
        } else {
          break;
        }
      }

      if (toCheck == 0) {
        // remove k -1 characters from the string
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

const result = removeDuplicates("yfttttfbbbbnnnnffbgffffgbbbbgssssgthyyyy", 4);
console.log("result", result);
