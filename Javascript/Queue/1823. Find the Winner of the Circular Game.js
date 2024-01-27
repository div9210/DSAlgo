const { Queue } = require("./queue");

var findTheWinner = function (n, k) {
  let friends = new Queue();
  k = k > n ? k % n : k;

  for (let i = 1; i <= n; i++) {
    friends.enqueue(i);
  }

  while (friends.size() != 1) {
    // Play the game
    let roundsPlayed = 1;
    while (roundsPlayed != k) {
      let safeFriend = friends.front();
      friends.dequeue();
      // Now place the safe friend at the end of the queue
      // so that the front points to the next friend
      friends.enqueue(safeFriend);
      roundsPlayed++;
    }

    // If loop breaks that means we have found the eliminated friend
    // Eliminate him
    friends.dequeue();
  }

  // If code reaches here, that means there is only winner
  return friends.front();
};

let n = 6,
  k = 5;

console.log(findTheWinner(n, k));
