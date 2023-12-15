var reorganizeString = function (str) {
  let map = new Map();
  let s = str.split("");
  // Iterate the char count
  for (let i = 0; i < s.length; i++) {
    if (map.has(s[i])) {
      map.set(s[i], map.get(s[i]) + 1);
    } else {
      map.set(s[i], 1);
    }
  }

  // Find the most frequent character
  map = new Map([...map.entries()].sort((a, b) => b[1] - a[1]));
  let mostFrequentChar = [...map.keys()][0];
  let frequency = [...map.values()][0];

  // Place the most frequent character at alternate positions
  let index = 0;
  while (frequency > 0 && index < s.length) {
    s[index] = mostFrequentChar;
    frequency--;
    index += 2;
  }

  // If all were not placed
  if (index >= s.length) {
    return "";
  }

  map.set(mostFrequentChar, 0);

  // Place rest of the characters
  for (let [key, value] of map) {
    while (value != 0) {
      index = index > s.length - 1 ? 1 : index;
      s[index] = key;
      value--;
      index += 2;
    }
  }

  return s.join("");
};

console.log(reorganizeString("bbbbbbb"));
