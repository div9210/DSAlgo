// Solid Half Diamond Pattern
// * 1
// ** 2
// *** 3
// **** 4
// ***** 5
// **** 4
// *** 3
// ** 2
// * 1

function solidHalfDiamondPattern(n) {
  if (n % 2 === 0) {
    console.log("Please add ODD NUMBER");
    return;
  }
  let peak = Math.floor(n / 2) + 1;
  let str = "";
  for (let i = 1; i <= peak; i++) {
    for (let j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }

  for (let i = peak - 1; i >= 1; i--) {
    for (j = 1; j <= i; j++) {
      str += "*";
    }
    str += "\n";
  }
  console.log(str);
}

solidHalfDiamondPattern(11);
