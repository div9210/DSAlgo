function isVowel(char) {
  // Check if the character is a vowel in lowercase or uppercase
  return (
    char === "a" ||
    char === "A" ||
    char === "e" ||
    char === "E" ||
    char === "i" ||
    char === "I" ||
    char === "o" ||
    char === "O" ||
    char === "u" ||
    char === "U"
  );
}

var reverseVowels = function (s) {
  let str = s.split("");
  let i = 0;
  let j = s.length - 1;

  while (i < j) {
    // Check if s[i] is a vowel
    if (isVowel(str[i])) {
      // Check if s[j] is a vowel
      if (isVowel(str[j])) {
        let temp = str[j];
        str[j] = str[i];
        str[i] = temp;
        i++;
        j--;
      } else {
        j--;
      }
    } else {
      i++;
    }
  }

  return str.join("");
};
let s = "hello";
console.log(reverseVowels(s));
