class TrieNode {
    constructor(key) {
        this.key = key;
        this.children = new Map();
        this.isTerminal = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode("#");
    }

    addWord(word, root = this.root) {
        if (word.length == 0) {
            root.isTerminal = true;
            return;
        }

        // Insert the first char and rest will be done by recursion
        let firstChar = word[0];
        if (!root.children.has(firstChar)) {
            let charNode = new TrieNode(firstChar);
            root.children.set(firstChar, charNode);
            root = charNode;
        } else {
            root = root.children.get(firstChar);
        }

        this.addWord(word.substring(1), root);
        return word;
    }

    search(word, root = this.root) {
        if (word.length == 0) {
            return root.isTerminal;
        }

        let firstChar = word[0];
        if (root.children.has(firstChar)) {
            root = root.children.get(firstChar);
            let checkFurther = this.search(word.substring(1), root);
            if (checkFurther) return true;
        }

        return false;
    }
}

/** 
 * Your WordDictionary object will be instantiated and called as such:
 * var obj = new WordDictionary()
 * obj.addWord(word)
 * var param_2 = obj.search(word)
 */

let wordDictionary = new WordDictionary();
wordDictionary.addWord("bad");
wordDictionary.addWord("dad");
wordDictionary.addWord("mad");
wordDictionary.search("pad"); // return False
wordDictionary.search("bad"); // return True
wordDictionary.search(".ad"); // return True
wordDictionary.search("b.."); // return True