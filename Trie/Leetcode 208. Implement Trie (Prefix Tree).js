class TrieNode {
    constructor(letter) {
        this.key = letter;
        this.children = new Map();
        this.isTerminal = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode("#");
    }

    insert(word, root = this.root) {
        // Insert the first char and do rest by recursion
        if (word.length == 0) {
            // Set root as terminal
            root.isTerminal = true;
            return;
        }

        let firstChar = word[0];
        // Set the char as root's child
        if (!root.children.has(firstChar)) {
            let charNode = new TrieNode(firstChar);
            root.children.set(firstChar, charNode);
            root = charNode;
        } else {
            root = root.children.get(firstChar);
        }

        this.insert(word.substring(1), root);
        return null;
    }

    search(word, root = this.root) {
        if (word.length == 0) {
            return root.isTerminal;
        }

        let firstChar = word[0];
        if (root.children.has(firstChar)) {
            root = root.children.get(firstChar);
            let furtherCheck = this.search(word.substring(1), root);
            if (furtherCheck) return true;
        }

        return false;
    }

    startsWith(word, root = this.root) {
        if (word.length == 0) {
            return true;
        }

        let firstChar = word[0];
        if (root.children.has(firstChar)) {
            root = root.children.get(firstChar);
            let furtherCheck = this.startsWith(word.substring(1), root);
            if (furtherCheck) return true;
        }
        return false;
    }
}


let trie = new Trie();

let result = [trie.insert("apple"), trie.search("apple"), trie.search("app"), trie.startsWith("app"), trie.insert("app"), trie.search("app")];
console.log('result', result);