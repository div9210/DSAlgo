// Leetcode Question: 2325
// Runtime: 70 ms
// Memory: 45.50 MB
var decodeMessage = function (key, message) {
  let map = new Map();
  let startLetter = "a";
  for (let i = 0; i < key.length; i++) {
    if (!map.has(key[i]) && key[i] != " ") {
      map.set(key[i], startLetter);
      if (startLetter === "z") {
        startLetter === "a";
      } else {
        startLetter = String.fromCharCode(startLetter.charCodeAt(0) + 1);
      }
    }
  }

  // decoding the message
  let decodedMessage = "";
  for (let i = 0; i < message.length; i++) {
    if (message[i] == " ") {
      decodedMessage += " ";
    } else {
      let replacedChar = map.get(message[i]);
      decodedMessage += replacedChar;
    }
  }

  return decodedMessage;
};

const result = decodeMessage(
  "the quick brown fox jumps over the lazy dog",
  "vkbs bs t suepuv"
);

console.log("result", result);
