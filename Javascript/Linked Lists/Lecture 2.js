class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  printHeadAndTail() {
    if (this.head == null || this.tail == null) {
      console.log("Empty Linked List");
      return;
    } else {
      console.log("Head ->", this.head.data);
      console.log("Tail ->", this.tail.data);
    }
  }

  // Print the LL
  print() {
    if (this.head == null || this.tail == null) {
      console.log("Empty Linked List");
      return;
    } else {
      let currentNode = this.head;
      let printLL = "";
      while (currentNode != null) {
        printLL += currentNode.data;
        if (currentNode.next != null) {
          printLL += " <--> ";
        }
        currentNode = currentNode.next;
      }
      console.log("Forward:", printLL);
      // Backwards
      currentNode = this.tail;
      let printBackward = "";
      while (currentNode != null) {
        printBackward += currentNode.data;
        if (currentNode.prev != null) {
          printBackward += " <--> ";
        }
        currentNode = currentNode.prev;
      }
      console.log("Backward:", printBackward);

      this.printHeadAndTail();
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
      this.head.prev = newNode;
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
      newNode.prev = this.tail;
      this.tail = newNode;
    }

    this.length++;
  }

  // Add at an arbitary position
  addAtPosition(data, position) {
    // Tacking Invalid Postion
    if (position < 1 || position > this.length + 1) {
      console.log("Invalid position, try between 1 and", this.length + 1);
      return;
    } else if (position == 1) {
      this.addAtHead(data);
    } else if (position == this.length + 1) {
      this.addAtTail(data);
    } else {
      let newNode = new Node(data);
      let mid = Math.floor((1 + this.length) / 2);
      let currentNode = null;
      if (position >= mid) {
        // Iterate backward using prev
        currentNode = this.tail;
        let reachedPosition = this.length;
        while (reachedPosition != position - 1) {
          currentNode = currentNode.prev;
          reachedPosition--;
        }
      } else {
        // Iterate forward using next
        currentNode = this.head;
        let reachedPosition = 1;
        while (reachedPosition != position - 1) {
          currentNode = currentNode.next;
          reachedPosition++;
        }
      }
      // Draw this on board to have a clear view
      newNode.prev = currentNode;
      newNode.next = currentNode.next;
      currentNode.next = newNode;
      newNode.next.prev = newNode;
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
    }
  }

  // 2. Delete Tail
  deleteTail() {
    if (this.head == null || this.tail == null) {
      console.log("Cannot Remove, Empty LL");
    } else {
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
    }
  }
}

let DLL = new DoublyLinkedList();
DLL.addAtHead(5);
DLL.addAtTail(10);
DLL.addAtTail(15);
DLL.addAtTail(20);
DLL.addAtTail(25);
DLL.print();

console.log(" ");
console.log("After DLL.addAtPosition(100, 2)");
DLL.addAtPosition(100, 2);
DLL.print();

console.log(" ");
console.log("After DLL.addAtPosition(200, 2)");
DLL.addAtPosition(200, 2);
DLL.print();
