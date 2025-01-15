/**
 * @param {number} capacity
 */
class Node {
    constructor(key, val) {
        this.key = key;
        this.val = val;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    constructor(capacity) {
        this.cap = capacity;
        this.keyNode = new Map();
        this.head = new Node(-1, -1);
        this.tail = new Node(-1, -1);

        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    get(key) {
        if (!this.keyNode.has(key)) return -1;

        let node = this.keyNode.get(key);

        // Delete it from it's position and
        // Make this the new right of head

        // delete from position
        node.prev.next = node.next;
        node.next.prev = node.prev;

        // assign the pos right to head
        node.prev = this.head;
        node.next = this.head.next;

        node.next.prev = node;
        this.head.next = node;

        return node.val;
    }

    put(key, value) {
        // Check if the cap is full
        // In that case, make some room for the new node
        let newNode = new Node(key, value);
        this.keyNode.set(key, newNode);

        if (this.keyNode.size > this.cap) {
            // Make room by removing the LRU
            // LRU exists at left of tail
            let lru = this.tail.prev;
            // delete the lru from LL and map both
            lru.prev.next = lru.next;
            lru.next.prev = lru.prev;
            this.keyNode.delete(lru.key);
        }

        // Insert the newNode at right of head
        newNode.prev = this.head;
        newNode.next = this.head.next;

        newNode.next.prev = newNode;
        this.head.next = newNode;
    }
};


let lc = new LRUCache(2);
lc.put(2, 1);
lc.put(1, 1);
lc.put(2, 3);
lc.put(4, 1);
lc.get(1);
lc.get(2);