var convert = function (s, numRows) {
  if (s.length == 0) {
    return "";
  }

  if (s.length === 1 || numRows == 1) {
    return s;
  }
  // Make an empty space
  let resultMatrix = [];
  for (let i = 0; i < numRows; i++) {
    resultMatrix.push([]);
  }

  let skipForSameLine = 2 * (numRows - 1);
  let currPosInS = 0;
  let currentRow = 0;
  while (currPosInS < s.length) {
    let startIndex = currPosInS;
    let endIndex = currPosInS + skipForSameLine;
    while (startIndex <= endIndex && currentRow < numRows) {
      if (s[startIndex]) {
        resultMatrix[currentRow].push(s[startIndex]);
      }

      if (s[endIndex] && currentRow != 0 && currentRow != numRows - 1) {
        resultMatrix[currentRow].push(s[endIndex]);
      }

      startIndex++;
      endIndex--;
      currentRow++;
    }

    currPosInS += skipForSameLine;
    currentRow = 0;
  }

  // Here you have zigzag string in the resultMatrix
  let resultString = "";
  for (let i = 0; i < resultMatrix.length; i++) {
    for (let j = 0; j < resultMatrix[i].length; j++) {
      resultString += resultMatrix[i][j];
    }
  }

  return resultString;
};

console.log(convert("PAYPALISHIRING", 5)); // "PAHNAPLSIIGYIR"
