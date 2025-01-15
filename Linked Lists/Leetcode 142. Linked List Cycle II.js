var detectCycle = function (head) {
  let rabbit = head;
  let tortoise = head;

  let isLoopPresent = false;
  while (rabbit?.next?.next) {
    rabbit = rabbit.next.next;
    tortoise = tortoise.next;
    if (rabbit == tortoise) {
      isLoopPresent = true;
      break;
    }
  }

  if (isLoopPresent) {
    tortoise = head;
    while (tortoise !== rabbit) {
      rabbit = rabbit.next;
      tortoise = tortoise.next;
    }

    return tortoise;
  }

  return null;
};
