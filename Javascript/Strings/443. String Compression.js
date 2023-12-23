function reverse(a, start, end) {
  end = end - 1;
  while (start < end) {
    let temp = a[start];
    a[start] = a[end];
    a[end] = temp;

    start++;
    end--;
  }
}

var compress = function (chars) {
  let i = 0;
  let j = i + 1;
  // While i and j are valid indexes
  let count = 1;
  let placingIndex = 0;
  while (i < chars.length && j < chars.length) {
    if (chars[i] == chars[j]) {
      count++;
      j++;
    } else {
      chars[placingIndex] = chars[i]; // Place the character
      placingIndex++;

      if (count > 1) {
        let startIndexOfCount = placingIndex;
        while (count) {
          // Place the count
          chars[placingIndex] = `${count % 10}`;
          count = Math.floor(count / 10);
          placingIndex++;
        }
        // let endIndexOfCount = placingIndex;
        // No need to store it after the while loop ends placingIndex will be pointing to
        // the end index only. So reverse
        reverse(chars, startIndexOfCount, placingIndex);
      }

      i = j;
      j = i + 1;
      count = 1;
    }
  }

  // Store the character at i and count at the placing index
  chars[placingIndex] = chars[i]; // Place the character
  placingIndex++;

  if (count > 1) {
    let startIndexOfCount = placingIndex;
    while (count) {
      // Place the count
      chars[placingIndex] = `${count % 10}`;
      count = Math.floor(count / 10);
      placingIndex++;
    }
    // let endIndexOfCount = placingIndex;
    // No need to store it after the while loop ends placingIndex will be pointing to
    // the end index only. So reverse
    reverse(chars, startIndexOfCount, placingIndex);
  }

  console.log("chars", chars);

  return placingIndex;
};

let chars = [
  "a",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "b",
  "c",
  "c",
  "d",
  "d",
]; // ab3c2d11
console.log(compress(chars));
