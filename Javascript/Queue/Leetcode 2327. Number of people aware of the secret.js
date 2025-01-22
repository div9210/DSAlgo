const { Queue } = require("./queue");

// PENDING
var peopleAwareOfSecret = function (n, delay, forget) {
  let delayQ = new Queue();
  // delayQ already has one entry i.e person knowing the secret on day 1
  delayQ.enqueue(1);
  let forgetQ = new Queue();
  let totalKnown = 1;
  let activeSpreadersTillNow = 0;
  for (let day = 1; day <= n; day++) {
    // Check if delayQ.front() has become an activeSpreader
    while (day - delayQ.front() >= delay) {
      // This means he is an activeSpreader
      activeSpreadersTillNow++;

      // Now in the delay zone anymore but in the forgetQ
      let personDay = delayQ.front();
      delayQ.dequeue();
      forgetQ.enqueue(personDay);

      // Spread the secret to a new person
      delayQ.enqueue(day);
    }

    // Check if forgetQ.front() has forgotten
    let forgottenTillNow = 0;
    while (day - forgetQ.front() >= forget) {
      // This means he is not an activeSpreader anymore
      forgottenTillNow++;
      activeSpreadersTillNow--;

      // Not a part of forgetQ anymore
      forgetQ.dequeue();
    }

    totalKnown += activeSpreadersTillNow;
    totalKnown -= forgottenTillNow;
  }

  return totalKnown;
};
let n = 6,
  delay = 2,
  forget = 4;

console.log(peopleAwareOfSecret(n, delay, forget));
