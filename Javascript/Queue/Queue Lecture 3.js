const { Queue } = require("./queue");

// First non repeating characters for each input stream
function firstNonRepeatingAtTime(s) {
  let q = new Queue();
  let frequency = new Map();
  // Iterating left to right
  let ans = "";
  for (let i = 0; i < s.length; i++) {
    // Update the frequency table of the character
    frequency.set(s[i], (frequency.get(s[i]) || 0) + 1);
    // Push the character in the queue
    q.enqueue(s[i]);
    // find the first character in the queue that has frequency 1
    while (!q.isEmpty() && frequency.get(q.front()) != 1) {
      q.dequeue();
    }
    if (q.isEmpty()) {
      ans += "#";
    } else {
      ans += q.front();
    }
  }

  return ans;
}

console.log(firstNonRepeatingAtTime("yewaahkpuo"));

// Very Important Question
