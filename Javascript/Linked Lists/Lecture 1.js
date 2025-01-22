class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}
class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  intersect(node) {
    this.tail.next = node;
    this.tail = node;
  }

  getTail() {
    return this.tail;
  }

  printHeadAndTail() {
    if (this.head == null || this.tail == null) {
      console.log("Head of the LL ->", null);
      console.log("Tail of the LL ->", null);
    } else {
      console.log("Head of the LL ->", this.head.data);
      console.log("Tail of the LL ->", this.tail.data);
    }
  }

  // Print the LL
  print() {
    // If the head is pointing to null
    if (this.head == null) {
      console.log("The Linked List is Empty!");
      return;
    } else {
      let currentNode = this.head;
      let printableLL = "";
      while (currentNode != null) {
        // Print the current node
        printableLL += currentNode.data;
        if (currentNode.next != null) {
          printableLL += " -> ";
        }
        currentNode = currentNode.next;
      }
      console.log(
        "LL having length",
        this.length,
        "looks like (",
        printableLL,
        ")"
      );
    }
  }

  // Add an element at the head of the LL
  addAtHead(data) {
    let newNode = new Node(data);

    // If the LL is empty
    if (this.head == null || this.tail == null) {
      // Our newNode is the head and the tail
      this.head = newNode;
      this.tail = newNode;
    } else {
      // Non empty LL i.e head and tail are not pointing to null
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;
  }

  // Add an element at the tail of the LL
  addAtTail(data) {
    let newNode = new Node(data);
    if (this.head == null || this.tail == null) {
      this.head = this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add at an arbitary position
  addAtPosition(data, position) {
    if (position < 1 || position > this.length + 1) {
      console.log("Invalid Position, try between 1 to", this.length + 1);
      return;
    } else if (position == 1) {
      // Call addAtHead
      this.addAtHead(data);
    } else if (position == this.length + 1) {
      this.addAtTail(data);
    } else {
      let newNode = new Node(data);

      // Valid position and position is neither head nor tail
      // Example : If we want to place a node at position 5
      // We have to place it next to 4 i.e position - 1
      let currentNode = this.head;
      let reachedPosition = 1;
      while (reachedPosition != position - 1) {
        currentNode = currentNode.next;
        reachedPosition++;
      }

      // Now at the end of the loop, you have reached at one before
      newNode.next = currentNode.next;
      currentNode.next = newNode;
    }
    this.length++;
  }

  // Removal Functions
  // 1. Delete head
  deleteHead() {
    if (this.head == null || this.tail == null) {
      console.log("Cannot Remove, Empty LL");
      return;
    } else {
      // Non Empty but single node
      if (this.head == this.tail) {
        this.head = this.tail = null;
        // delete tempHead; // This won't work
        // But setting null is equal to deleting the node
        // as
        // In JavaScript, when an object or variable loses all references to it,
        // it becomes eligible for garbage collection.
        // Garbage collection is the process where the JavaScript engine automatically
        // frees up memory that is no longer in use by any part of the program.
        this.length--;
        return;
      }

      // If code reahces here that means more than one node are present in the LL
      this.head = this.head.next;
      this.length--;
    }
  }

  // 2. Delete Tail
  deleteTail() {
    if (this.head == null || this.tail == null) {
      console.log("Cannot Remove, Empty LL");
    } else {
      // Non Empty but single node
      if (this.head == this.tail) {
        this.head = this.tail = null;
        // delete tempHead; // This won't work
        // But setting null is equal to deleting the node
        // as
        // In JavaScript, when an object or variable loses all references to it,
        // it becomes eligible for garbage collection.
        // Garbage collection is the process where the JavaScript engine automatically
        // frees up memory that is no longer in use by any part of the program.
        this.length--;
        return;
      }

      // If code reahces here that means more than one node are present in the LL
      // So reach to one previous node to Tail
      let currentNode = this.head;
      while (currentNode.next != this.tail) {
        currentNode = currentNode.next;
      }
      currentNode.next = null; // Now previous tail node has no "next" reference
      // Removing the tail reference too
      this.tail = currentNode;
      this.length--;
    }
  }

  // 3. Delete at position
  deleteAtPosition(position) {
    if (this.head == null || this.tail == null) {
      console.log("Empty LL, cannot remove.");
      return;
    }
    if (position < 1 || position > this.length) {
      console.log("Invalid position, try between 1 and", this.length);
    } else {
      // Valid position but has one node
      if (this.head == this.tail) {
        this.head = this.tail = null;
        this.length--;
        return;
      }

      // If code reaches here that means it has more than one node
      let currentNode = this.head;
      let reachedPosition = 1;
      while (reachedPosition != position - 1) {
        currentNode = currentNode.next;
        reachedPosition++;
      }
      currentNode.next = currentNode.next.next;
      this.length--;
    }
  }

  getHead() {
    return this.head;
  }
}

let newLL = new LinkedList();
newLL.addAtHead(5);
newLL.addAtHead(6);
newLL.addAtHead(7);
newLL.addAtHead(1);
newLL.addAtHead(2);
newLL.addAtHead(10);
newLL.addAtTail(500);
newLL.print();
newLL.printHeadAndTail();

console.log("After newLL.addAtPosition(1230, 4)");
newLL.addAtPosition(1230, 4);
newLL.print();
newLL.printHeadAndTail();

console.log("After newLL.deleteHead()");
newLL.deleteHead();
newLL.print();
newLL.printHeadAndTail();

console.log("After newLL.deleteTail()");
newLL.deleteTail();
newLL.print();
newLL.printHeadAndTail();

console.log("After newLL.deleteAtPosition(3)");
newLL.deleteAtPosition(100);
newLL.deleteTail();
newLL.print();

module.exports = {
  newLL,
  LinkedList,
};
