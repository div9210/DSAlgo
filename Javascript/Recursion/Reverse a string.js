function reverseStr(str, result, index) {
  if (index >= str.length) {
    return;
  }

  // Recursive call
  reverseStr(str, result, index + 1);
  result.push(str[index]);
}

let string = "HelloPP";
let result = [];
reverseStr(string, result, 0);
console.log(result.join(""));
