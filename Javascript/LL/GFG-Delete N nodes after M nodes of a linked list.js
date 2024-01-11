const { newLL } = require("./Lecture 1");

class Solution {
  //   print(head) {
  //     let temp = head;
  //     let str = "";
  //     while (temp != null) {
  //       str += temp.data + " -> ";
  //       temp = temp.next;
  //     }

  //     console.log(str);
  //   }
  linkdelete(head, M, N) {
    // Start from head

    let currNode = head;
    while (currNode != null) {
      let currentPosition = 1;
      while (currentPosition < M && currNode != null) {
        currNode = currNode.next;
        currentPosition++;
      }

      // Now you have reached the mth node
      // Start deleting from the next
      if (currNode != null) {
        let deleted = 0;
        while (deleted < N && currNode.next != null) {
          currNode.next = currNode.next.next;
          deleted++;
        }
        currNode = currNode.next;
      }
    }

    // this.print(head);
    return head;
  }
}

const sol = new Solution();
sol.linkdelete(newLL.getHead(), 2, 1);
