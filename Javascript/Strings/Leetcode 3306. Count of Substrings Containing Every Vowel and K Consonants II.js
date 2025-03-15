/**
 * @param {string} word
 * @param {number} k
 * @return {number}
 */
var countOfSubstrings = function (word, k) {
  let n = word.length;
  const vowelMap = { a: false, e: false, i: false, o: false, u: false };
  let result = 0;
  for (let index = 0; index < n - 5; index++) {
    solve(index, k);
  }
  return result;

  function solve(index, consonants) {
    if (index >= n) {
      return;
    }

    if (consonants == 0) {
      // Check if all of the vowels has been used
      for (let key in vowelMap) {
        if (!vowelMap[key]) {
          return;
        }
      }
      result += 1;
    }

    if (["a", "e", "i", "o", "u"].includes(word[index])) {
      vowelMap[word[index]] = true;
      solve(index + 1, consonants);
    } else {
      solve(index + 1, consonants - 1);
    }
  }
};

const result = countOfSubstrings("ieaouqqieaouqq", 1);
console.log({ result });
