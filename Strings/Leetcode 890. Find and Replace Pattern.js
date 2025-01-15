function patternMapping(word) {
  let currentLetter = "a";
  let patternString = "";
  let map = new Map();
  for (let i = 0; i < word.length; i++) {
    if (!map.has(word[i])) {
      // Set the map key and value
      map.set(word[i], currentLetter);
      patternString += currentLetter;
      currentLetter = String.fromCharCode(currentLetter.charCodeAt(0) + 1);
    } else {
      // Get the value of key from map
      patternString += map.get(word[i]);
    }
  }

  return patternString;
}

var findAndReplacePattern = function (words, pattern) {
  let result = [];
  pattern = patternMapping(pattern);
  for (let i = 0; i < words.length; i++) {
    let currentWord = words[i];
    let patternOfWord = patternMapping(currentWord);
    if (patternOfWord === pattern) {
      result.push(currentWord);
    }
  }

  return result;
};

let words = ["fcc"];
let pattern = "abb";

const result = findAndReplacePattern(words, pattern);
console.log({
  result,
});
