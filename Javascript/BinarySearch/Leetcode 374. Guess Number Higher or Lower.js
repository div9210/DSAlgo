var guessNumber = function (n) {
  //   let start = 0;
  //   let end = n;
  let mid = null;

  let lowerStep = 1;
  while (lowerStep < n && guess(lowerStep) == 1) {
    lowerStep = lowerStep * 2;
  }

  let start = Math.floor(lowerStep / 2);
  // let end = lowerStep - 1 < arr.length ? lowerStep - 1 : arr.length - 1;
  let end = Math.min(lowerStep - 1, n);
  while (start <= end) {
    mid = Math.floor(start + (end - start) / 2);
    if (guess(mid) == -1) {
      end = mid - 1;
    } else if (guess(mid) == 1) {
      start = mid + 1;
    } else {
      return mid;
    }
  }

  return -1;
};
