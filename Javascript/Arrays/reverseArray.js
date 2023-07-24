class Solution {
  reverseWord(str) {
    str = Array.from(str);
    for (let i = 0; i < str.length / 2; i++) {
      let temp = str[i];
      str[i] = str[str.length - 1 - i];
      str[str.length - 1 - i] = temp;
    }
    return str.join("");
  }
}

const solution = new Solution();
const result = solution.reverseWord("Hello");
console.log("result", result);
