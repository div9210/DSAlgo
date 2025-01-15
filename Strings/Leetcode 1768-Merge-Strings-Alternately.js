var mergeAlternately = function (word1, word2) {
  let maxLen = Math.max(word1.length, word2.length);
  let currentChar = 0;
  let resultString = "";
  for (let i = 0; i < maxLen; i++) {
    if (word1[currentChar]) {
      resultString += word1[currentChar];
    }

    if (word2[currentChar]) {
      resultString += word2[currentChar];
    }

    currentChar++;
  }

  return resultString;
};

const result = mergeAlternately("abcd", "pq");
console.log({
  result,
});
