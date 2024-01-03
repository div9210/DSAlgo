let cMap = new Map([
  [1000000000, "Billion"],
  [1000000, "Million"],
  [1000, "Thousand"],
  [100, "Hundred"],
  [90, "Ninety"],
  [80, "Eighty"],
  [70, "Seventy"],
  [60, "Sixty"],
  [50, "Fifty"],
  [40, "Forty"],
  [30, "Thirty"],
  [20, "Twenty"],
  [19, "Ninteen"],
  [18, "Eighteen"],
  [17, "Seventeen"],
  [16, "Sixteen"],
  [15, "Fifteen"],
  [14, "Fourteen"],
  [13, "Thirteen"],
  [12, "Twelve"],
  [11, "Eleven"],
  [10, "Ten"],
  [9, "Nine"],
  [8, "Eight"],
  [7, "Seven"],
  [6, "Six"],
  [5, "Five"],
  [4, "Four"],
  [3, "Three"],
  [2, "Two"],
  [1, "One"],
]);

function solve(num, resultObj) {
  if (num == 0) {
    return;
  }

  // Generate the english word for digit
  for (let [key, value] of cMap) {
    if (num >= key) {
      if (key >= 100) {
        let digit = Math.floor(num / key);
        if (digit > 9) {
          solve(digit, resultObj);
          resultObj.result += " " + value;
        } else {
          let wordForDigit = cMap.get(digit);

          let wordForPosition = value;
          resultObj.result += " " + wordForDigit + " " + wordForPosition;
        }
      } else {
        resultObj.result += " " + value;
      }
      num = num % key;
      break;
    }
    continue;
  }

  // Recursive call
  solve(num, resultObj);
}
var numberToWords = function (num) {
  if (num == 0) return "Zero";
  let resultObj = { result: "" };
  solve(num, resultObj);
  return resultObj.result.trim();
};

console.log(numberToWords(123456789));
