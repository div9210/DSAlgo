function numericPalindromeEquilateralPyramid(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    let frontSpaces = n - i;
    let peak = i;
    let currPeak = 1;
    for (let j = 1; j <= n + (i - 1); j++) {
      if (j <= frontSpaces) {
        str += " ";
      } else {
        if (currPeak <= peak) {
          str += currPeak;
          currPeak++;
        } else {
          peak--;
          str += peak;
        }
      }
    }
    str += "\n";
  }
  console.log(str);
}

numericPalindromeEquilateralPyramid(10);
