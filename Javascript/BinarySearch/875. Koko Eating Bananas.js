var minEatingSpeed = function (piles, h) {
  // Sort the piles
  piles.sort((a, b) => a - b);
  let sum = 0;
  for (let i = 0; i < piles.length; i++) {
    sum += piles[i];
  }

  // Define the searchspace
  let start = 0;
  let end = piles[piles.length - 1]; // Max bananas a pile consists

  let ans = -1;
  while (start <= end) {
    let k = Math.floor(start + (end - start) / 2);
    // Predicate function
    if (isPossibleSpeed(piles, h, k, sum)) {
      // Either this is your answer or the answer exists at left
      ans = k;
      end = k - 1;
    } else {
      start = k + 1;
    }
  }

  return ans;
};

function isPossibleSpeed(piles, h, speed) {
  let currentHour = 0;
  for (let i = 0; i < piles.length; i++) {
    // Finish the current pile, Since it has more than the speed
    const hoursTakenToFinishPile = Math.ceil(piles[i] / speed);
    currentHour += hoursTakenToFinishPile;

    if (currentHour > h) {
      return false;
    }
  }

  return true;
}

const result = minEatingSpeed([3, 6, 7, 11], 8);
console.log({
  result,
});
