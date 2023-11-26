var successfulPairs = function (spells, potions, success) {
  // Sort the potions
  potions.sort((a, b) => a - b);
  let result = [];
  for (let i = 0; i < spells.length; i++) {
    let start = 0;
    let end = potions.length - 1;
    let firstSuccessSpell = -1;
    while (start <= end) {
      let mid = Math.floor(start + (end - start) / 2);
      if (potions[mid] * spells[i] >= success) {
        firstSuccessSpell = mid;
        end = mid - 1;
      } else {
        start = mid + 1;
      }
    }

    result.push(
      firstSuccessSpell != -1 ? potions.length - firstSuccessSpell : 0
    );
  }

  return result;
};

const result = successfulPairs([5, 1, 3], [1, 2, 3, 4, 5], 7);

console.log({
  result,
});
