var nodesBetweenCriticalPoints = function (head) {
  // Since head cannot be a CP
  // We will start the iteration from head.next
  let ans = [-1, -1];
  let prev = head;
  if (prev == null) return ans;
  let curr = head.next;
  if (curr == null) return ans;
  let nxt = head.next.next;
  if (nxt == null) return ans;

  // All the edge cases has been covered
  let firstCP = -1;
  let lastCP = -1;
  let minDistance = Number.MAX_SAFE_INTEGER;
  let currPos = 1;

  while (nxt != null) {
    let isCurrPosCP =
      (curr.val > prev.val && curr.val > nxt.val) ||
      (curr.val < prev.val && curr.val < nxt.val)
        ? true
        : false;

    if (isCurrPosCP && firstCP == -1) {
      // This is the firstCP
      firstCP = currPos;
      lastCP = currPos;
    } else if (isCurrPosCP) {
      // This is the current last CP
      minDistance = Math.min(minDistance, currPos - lastCP);
      lastCP = currPos;
    }

    // Next iteration
    currPos++;
    prev = prev.next;
    curr = curr.next;
    nxt = nxt.next;
  }

  if (lastCP > firstCP) {
    ans[0] = minDistance;
    ans[1] = lastCP - firstCP;
  }

  return ans;
};
