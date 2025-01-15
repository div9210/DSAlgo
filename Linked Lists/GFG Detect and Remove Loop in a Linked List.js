function DetectAndRemoveLoop(head) {
  let rabbit = head;
  let tortoise = head;

  let isLoopPresent = false;
  while (rabbit !== null && rabbit.next !== null && rabbit.next.next !== null) {
    // rabbit?.next?.next
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (tortoise === rabbit) {
      isLoopPresent = true;
      break;
    }
  }

  if (isLoopPresent) {
    // Find the starting point
    tortoise = head;
    while (rabbit.next !== tortoise.next) {
      rabbit = rabbit.next;
      tortoise = tortoise.next;
    }

    // If code reaches here that means rabbit is at tail node
    rabbit.next = null;
  }
}

// This works

class Solution {
  // Function to remove a loop in the linked list.
  removeLoop(head) {
    let rabbit = head;
    let tortoise = head;

    let isLoopPresent = false;
    while (
      rabbit !== null &&
      rabbit.next !== null &&
      rabbit.next.next !== null
    ) {
      rabbit = rabbit.next.next;
      tortoise = tortoise.next;
      if (tortoise === rabbit) {
        isLoopPresent = true;
        break;
      }
    }

    if (isLoopPresent) {
      // Find the starting point
      let prev = null;
      tortoise = head;
      while (rabbit !== tortoise) {
        prev = rabbit;
        rabbit = rabbit.next;
        tortoise = tortoise.next;
      }
      prev.next = null;

      // If code reaches here that means both rabbit and tortoise point at the
      // starting point of the loop
      //   while (tortoise.next !== rabbit) {
      //     tortoise = tortoise.next;
      //   }
      //   tortoise.next = null;
    }
  }
}
