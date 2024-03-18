const { Trie } = require("./Trie Implementation");

function findWordsFromRoot(root, prefix, ans, currWord) {
  // Base Cases

  if (root.isTerminal) {
    // Push into ans
    ans.push(prefix + currWord);
  }

  for (let child of root.children) {
    if (child) {
      findWordsFromRoot(child, prefix, ans, currWord + child.val);
    }
  }
}

function findWordsByPrefix(root, prefix, index, ans) {
  if (index == prefix.length) {
    // Find words
    let currWord = "";
    findWordsFromRoot(root, prefix, ans, currWord);
    return;
  }

  let ch = prefix[index];
  let chIndex = ch.charCodeAt(0) - "a".charCodeAt(0);
  if (root.children[chIndex] == null) {
    return;
  } else {
    findWordsByPrefix(root.children[chIndex], prefix, index + 1, ans);
  }
}

let Tr = new Trie();
Tr.insert(Tr.getRoot(), "love");
Tr.insert(Tr.getRoot(), "lovely");
Tr.insert(Tr.getRoot(), "loved");
Tr.insert(Tr.getRoot(), "loves");
Tr.insert(Tr.getRoot(), "lovelu");
Tr.insert(Tr.getRoot(), "lobbb");

let index = 0;
let prefix = "";
let ans = [];
findWordsByPrefix(Tr.getRoot(), prefix, index, ans);
console.log("ans", ans);
