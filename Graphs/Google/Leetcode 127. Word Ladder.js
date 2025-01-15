/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {string[]} wordList
 * @return {number}
 */
var ladderLength = function (beginWord, endWord, wordList) {
  // Here the wordList is an Array, we will be needing a DS to search words in O(1)
  let wordSet = new Set(wordList);

  // We will use BFS to solve this problem
  let q = [];
  // Initial State
  let prevLevel = -1;
  q.push([[beginWord], 1]) // [[word], level]

  let toBeDeletedWords = [];
  let paths = [];
  while (q.length > 0) {
    let front = q.shift();
    let [path, level] = front;
    let word = path[path.length - 1];

    if (word == endWord) {
      paths.push(path);
    }

    if (level != prevLevel) {
      // That means prevLevel has been processed completely
      while (toBeDeletedWords.length > 0) {
        let w = toBeDeletedWords.shift();
        wordSet.delete(w);
      }
      prevLevel = level;
    }

    // Change every position of the word with a-z characters
    for (let i = 0; i < word.length; i++) {
      let currentWordChar = word[i];
      let A = "a".charCodeAt(0);
      let Z = "z".charCodeAt(0);

      for (let charCode = A; charCode <= Z; charCode++) {
        if (currentWordChar != replacedChar) {
          let replacedChar = String.fromCharCode(charCode);
          let replacedWord = word.substring(0, i) + replacedChar + word.substring(i + 1);
          if (wordSet.has(replacedWord)) {
            let newPath = [...path].push(replacedWord);
            q.push([newPath, level + 1]);
            // But this replaced word can be reached by a different path as well for the same level
            toBeDeletedWords.push(replacedWord);
          }
        }

      }
    }
  }

  return paths;
};

let beginWord = "hit",
  endWord = "cog",
  wordList = ["hot", "dot", "dog", "lot", "log", "cog"];

console.log(ladderLength(beginWord, endWord, wordList));
