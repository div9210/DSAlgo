var reverseString = function (s) {
  // Note : Strings are immutable thus you can't pick a char and change it
  // Thus make a charArray from string
  let charArray = s.split("");
  let n = s.length;
  for (let i = 0; i < n / 2; i++) {
    let temp = charArray[i];
    charArray[i] = charArray[n - i - 1];
    charArray[n - i - 1] = temp;
  }

  return charArray.join("");
};

const reverse = reverseString("hello");
console.log("reverse", reverse);
