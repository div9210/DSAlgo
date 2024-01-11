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

  reverse() {
    if (this.head == null || this.tail == null) {
      console.log("Empty LL");
      return;
    } else {
      let prevNode = null;
      let currentNode = this.head;
      let nextNode = currentNode.next;
      while (currentNode != null) {
        currentNode.next = prevNode;

        // Change the values
        prevNode = currentNode;
        currentNode = nextNode;
        // Update the nextNode if currentNode is not null
        if (nextNode != null) {
          nextNode = nextNode.next;
        }
      }
      this.head = prevNode;
    }
  }
}

let LL = new LinkedList();
LL.addAtTail(1);
LL.addAtTail(2);
LL.addAtTail(3);
LL.addAtTail(4);
LL.addAtTail(5);
LL.addAtTail(6);
LL.print();
LL.reverse();
LL.print();
