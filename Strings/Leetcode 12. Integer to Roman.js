var intToRoman = function (num) {
  let map = new Map([
    ["M", 1000],
    ["CM", 900],
    ["D", 500],
    ["C", 100],
    ["XC", 90],
    ["L", 50],
    ["X", 10],
    ["IX", 9],
    ["V", 5],
    ["IV", 4],
    ["I", 1],
  ]);

  let ansString = "";
  // Iterate over the map and start with roman letters
  for (let [key, value] of map) {
    while (num >= value) {
      // Write the current roman letter
      ansString += key;
      num = num - value;
    }
  }

  return ansString;
};

console.log(intToRoman(324));

// Symbol       Value
// I             1
// V             5
// X             10
// L             50
// C             100
// D             500
// M             1000
