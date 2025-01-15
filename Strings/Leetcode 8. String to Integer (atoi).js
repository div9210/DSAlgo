var myAtoi = function (s) {
  // Trim the string i.e remove whitespaces
  // NOT COMPLETE
  let result = "";
  let isNegative = false;
  let initialNumFound = false;
  for (let i = 0; i < s.length; i++) {
    if (s[i] == " ") {
      continue;
    } else if (s[i] == "-") {
      isNegative = true;
    }

    // If code reaches here that means the current char is neither a white space
    // Nor a sign
    // look for initial zeroes
    if (!initialNumFound && s[i] == "0") {
      continue;
    } else {
      result += s[i];
    }
  }
};

let s = "    Helllo";
console.log(myAtoi(s));
