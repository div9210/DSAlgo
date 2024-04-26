/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // Form a setList from wordList for presence checking in O(1)
  let setWords = new Set(wordList);
  if (!setWords.has(endWord)) return 0;

  let q = [];
  // Intitial state
  q.push([beginWord, 1]); // [word, level]

  let endWordAt = null;
  while (q.length > 0) {
    let pickedFront = q.shift();
    let [word, level] = pickedFront;
    if (word == endWord) {
      endWordAt = level;
    }

    for (let pos = 0; pos < word.length; pos++) {
      for (let i = "a".charCodeAt(0); i <= "z".charCodeAt(0); i++) {
        let currentChar = String.fromCharCode(i);
        // Replace the pos with current char i
        // Only if they are not same
        if (currentChar != word[pos]) {
          let replacedStr =
            word.substring(0, pos) + currentChar + word.substring(pos + 1);
          if (setWords.has(replacedStr)) {
            q.push([replacedStr, level + 1]);
            // Remove the replaced string from setWords after the insertion
            setWords.delete(replacedStr);
          }
        }
      }
    }
  }

  return endWordAt;
};

let beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
