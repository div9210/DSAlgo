var removeDuplicates = function (s) {
  let tempString = "";
  for (let i = 0; i < s.length; i++) {
    // Store the current char in the tempString if the last char
    // of the temp string is not equal to the current char
    // which basically means current char is appearing for the first time
    if (tempString[tempString.length - 1] != s[i]) {
      // Push the char in the tempString
      tempString += s[i];
    } else {
      // Remove the last char from tempString as it is duplicate
      tempString = tempString.slice(0, -1); // Remove last character from string
    }
  }

  return tempString;
};
