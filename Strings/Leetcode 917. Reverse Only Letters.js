var reverseOnlyLetters = function (str) {
  let s = str.split("");

  let i = 0;
  let j = s.length - 1;
  while (i <= j) {
    if (
      (s[i].charCodeAt(0) >= 65 && s[i].charCodeAt(0) <= 90) ||
      (s[i].charCodeAt(0) >= 97 && s[i].charCodeAt(0) <= 122)
    ) {
      if (
        (s[j].charCodeAt(0) >= 65 && s[j].charCodeAt(0) <= 90) ||
        (s[j].charCodeAt(0) >= 97 && s[j].charCodeAt(0) <= 122)
      ) {
        let temp = s[i];
        s[i] = s[j];
        s[j] = temp;
        i++;
        j--;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }

  return s.join("");
};
let s = "AaW;c?[";
console.log(reverseOnlyLetters(s));
