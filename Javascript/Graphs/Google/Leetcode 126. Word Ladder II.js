/**
 * @param {number[]} wordList
 * @param {string} startWord
 * @param {string} targetWord
 * @param {number} N
 * @returns {number[]}
 */
class Solution {
  findSequences(beginWord, endWord, wordList, N) {
    // Form a setList from wordList for presence checking in O(1)
    let setWords = new Set(wordList);
    if (!setWords.has(endWord)) return [];

    let q = [];
    // Intitial state
    q.push([[beginWord], 1]); // [path, level]

    let prevLevel = -1;
    let strsToBeRemoved = [];

    let possiblePaths = [];
    while (q.length > 0) {
      let pickedFront = q.shift();
      let [path, level] = pickedFront;
      let word = path[path.length - 1];

      if (word == endWord) {
        possiblePaths.push(path);
      }

      if (level != prevLevel) {
        // The prev level has been processed completely
        while (strsToBeRemoved.length) {
          let deleteWord = strsToBeRemoved.pop();
          setWords.delete(deleteWord);
        }

        prevLevel = level;
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
              let currentPath = [...path];
              currentPath.push(replacedStr);
              q.push([currentPath, level + 1]);
              // Remove the replaced string from setWords after the insertion
              strsToBeRemoved.push(replacedStr);
            }
          }
        }
      }
    }

    return possiblePaths;
  }
}
