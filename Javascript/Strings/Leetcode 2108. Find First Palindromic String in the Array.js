/**
 * @param {string[]} words
 * @return {string}
 */
function palindrome(word) {
  for (let i = 0; i < word.length / 2; i++) {
    if (word[i] != word[word.length - i - 1]) {
      return false;
    }
  }
  return true;
}
var firstPalindrome = function (words) {
  for (let i = 0; i < words.length; i++) {
    if (palindrome(words[i])) {
      return words[i];
    }
  }

  return "";
};
