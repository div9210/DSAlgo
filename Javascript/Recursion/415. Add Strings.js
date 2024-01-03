function solveRE(num1, p1, num2, p2, carry = 0) {
  // Base case
  if (p1 < 0 && p2 < 0) {
    if (carry !== 0) {
      return `${carry}`;
    } else {
      return "";
    }
  }

  // Solving the first case
  let digit1 = Number(num1[p1] || 0);
  let digit2 = Number(num2[p2] || 0);

  let digitSum = digit1 + digit2 + carry;
  carry = Math.floor(digitSum / 10);
  digitSum = digitSum % 10;
  digitSum = String(digitSum);

  // Recursive call
  return solveRE(num1, p1 - 1, num2, p2 - 1, carry) + digitSum;
}

function solveREUsingObject(nums, p1, p2, carry = 0) {
  // Base case
  if (p1 < 0 && p2 < 0) {
    if (carry !== 0) {
      return `${carry}`;
    } else {
      return "";
    }
  }

  // Solving the first case
  let digit1 = Number(nums.num1[p1] || 0);
  let digit2 = Number(nums.num2[p2] || 0);

  let digitSum = digit1 + digit2 + carry;
  carry = Math.floor(digitSum / 10);
  digitSum = digitSum % 10;
  digitSum = String(digitSum);

  // Recursive call
  return solveREUsingObject(nums, p1 - 1, p2 - 1, carry) + digitSum;
}

var addStrings = function (num1, num2) {
  let p1 = num1.length - 1;
  let p2 = num2.length - 1;
  // Improvement 1 --> strings num1 and num2 will be passed by value
  // thus will be copied for each recursive call. Since we know
  // objects are pass by reference in javascript
  let additionByObj = solveREUsingObject({ num1, num2 }, p1, p2);
  let addition = solveRE(num1, p1, num2, p2);
  return additionByObj;
  //   return addition.split("").reverse().join(""); // Reverse the final result
};

console.log(addStrings("123", "88"));
