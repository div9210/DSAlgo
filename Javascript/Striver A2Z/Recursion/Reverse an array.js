function reverseArray(left, right, arr) {
  if (left >= right) return;
  swap(left, right, arr);
  reverseArray(left + 1, right - 1, arr);
}

function swap(i, j, arr) {
  let temp = arr[i];
  arr[i] = arr[j];
  arr[j] = temp;
}

let sampleArray = [1, 2, 3, 4, 5, 6];
let n = sampleArray.length;
reverseArray(0, n - 1, sampleArray);
console.log("sampleArray", sampleArray);
