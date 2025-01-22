function swap(str, i, j) {
  const arr = str.split("");
  const temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
  return arr.join("");
}

function Permutations(str, i) {
  // Base case
  if (i >= str.length) {
    console.log(str);
    return;
  }

  let j = i;
  while (j < str.length) {
    // Swap characters at indices i and j
    str = swap(str, i, j);

    // Recursively generate permutations
    Permutations(str, i + 1);

    // Restore the string to its original state for the next iteration
    str = swap(str, i, j);

    j++;
  }
}

// Example usage
const inputString = "abc";
Permutations(inputString, 0);
