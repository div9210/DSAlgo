class TrieNode {
  constructor(val) {
    this.val = val;
    this.children = new Array(26).fill(null);
    this.isTerminal = false;
  }
}

class Trie {
  constructor() {
    this.root = new TrieNode("#");
  }
  insert(word, root = this.root) {
    // Base Case
    if (word.length == 0) {
      // then the current root is Terminal
      root.isTerminal = true;
      return;
    }

    let charToInsert = word[0];
    // check if the child node already present
    let indexOfChar = charToInsert.charCodeAt(0) - "a".charCodeAt(0);
    if (root.children[indexOfChar] != null) {
      // Children already exists
      root = root.children[indexOfChar];
    } else {
      let childrenNode = new TrieNode(charToInsert);
      root.children[indexOfChar] = childrenNode;
      root = childrenNode;
    }
    this.insert(word.substr(1), root);
  }

  search(word, root = this.root) {
    if (word.length === 0) {
      return root.isTerminal;
    }
    let ch = word[0];
    let chIndex = ch.charCodeAt(0) - "a".charCodeAt(0);
    if (root.children[chIndex] == null) {
      return false;
    }

    let ansFromChild = this.search(word.substr(1), root.children[chIndex]);
    return ansFromChild;
  }

  startsWith(prefix, root = this.root) {
    if (prefix.length == 0) {
      return true;
    }

    let chIndex = prefix[0].charCodeAt(0) - "a".charCodeAt(0);
    if (root.children[chIndex] != null) {
      return this.startsWith(prefix.substr(1), root.children[chIndex]);
    } else {
      return false;
    }
  }

  delete(root = this.root, word) {
    if (word.length == 0) {
      // Mark the root node as non terminal
      root.isTerminal = false;
      return;
    }

    let ch = word[0];
    let chIndex = ch.charCodeAt(0) - "a".charCodeAt(0);

    if (root.children[chIndex] == null) {
      // Nothing present
      return;
    }

    // If present make a recursive call
    this.delete(root.children[chIndex], word.substr(1));
  }

  getRoot() {
    return this.root;
  }

  searchWordsByPrefix(root, prefix) {
    let result = [];
    let node = this.searchPrefixEndNode(root, prefix);
    if (node == null) {
      return result;
    }
    let currWord = prefix;
    getWords(node, prefix);
    return result;
    function getWords(node) {
      if (node.isTerminal) {
        result.push(currWord);
      }
      for (let child of node.children) {
        if (child != null) {
          currWord += child.val;
          getWords(child);
          currWord = currWord.slice(0, -1);
        }
      }
    }
  }

  searchPrefixEndNode(root = this.root, word) {
    if (word.length === 0) {
      return root;
    }
    let ch = word[0];
    let chIndex = ch.charCodeAt(0) - "a".charCodeAt(0);
    if (root.children[chIndex] == null) {
      return null;
    }

    let ansFromChild = this.searchPrefixEndNode(
      root.children[chIndex],
      word.substr(1)
    );
    return ansFromChild;
  }
}

var longestCommonPrefix = function (strs) {
  if (strs.length === 0) return "";

  let dict = new Trie();
  let root = dict.getRoot();

  // Insert non-empty strings into the Trie
  for (let i = 0; i < strs.length; i++) {
    if (strs[i].length > 0) {
      // Skip empty strings
      dict.insert(root, strs[i]);
    }
  }

  let ans = "";
  while (root) {
    // If root has only one children
    root.children = root.children.filter((c) => c != null);
    if (root.children.length == 1) {
      ans += root.children[0].val;
      root = root.children[0];
    } else {
      root = null;
    }
  }

  return ans;
};

let strs = ["flower", "flow", "flight"];
let result = longestCommonPrefix(strs);
console.log("result", result);

// let wordTrie = new Trie();
// wordTrie.insert(wordTrie.getRoot(), "love");
// wordTrie.insert(wordTrie.getRoot(), "lovely");
// wordTrie.insert(wordTrie.getRoot(), "lover");

// wordTrie.delete(wordTrie.getRoot(), "lovely");
// let searchWord = wordTrie.search(wordTrie.getRoot(), "lover");
// let result = wordTrie.searchWordsByPrefix(wordTrie.getRoot(), "lo");
// console.log(result);
// console.log("searchWord", searchWord);

module.exports = {
  Trie,
};
