// Numeric Hollow Pyramid Pattern
// 1
// 1 2
// 1   3
// 1     4
// 1 2 3 4 5

function numericHollowHalfPyramid(n) {
  let str = "";
  for (let i = 1; i <= n; i++) {
    for (let j = 1; j <= i; j++) {
      let rightEdge = i;
      if (j == 1 || j == rightEdge || i === n) {
        str += j;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  console.log(str);
}

numericHollowHalfPyramid(10);

// Reverse Pyramid Same as Above
function numericHollowHalfPyramidReverse(n) {
  let str = "";
  for (let row = n; row >= 1; row--) {
    for (let col = 1; col <= row; col++) {
      if (row == n || col == 1 || col == row) {
        str += col;
      } else {
        str += " ";
      }
    }
    str += "\n";
  }

  console.log(str);
}

numericHollowHalfPyramidReverse(10);
