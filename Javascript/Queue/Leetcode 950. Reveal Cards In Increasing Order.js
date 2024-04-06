const { Queue } = require("./queue");

var deckRevealedIncreasing = function (deck) {
  // Sort the deck
  deck.sort((a, b) => a - b);

  // Push all the indexes in a queue
  let q = new Queue();
  for (let i = 0; i < deck.length; i++) {
    q.enqueue(i);
  }

  // Play the game
  let arrangement = [];
  for (let i = 0; i < deck.length; i++) {
    // 1. Reveal a card, that is place the current card at q.front()
    arrangement[q.front()] = deck[i];
    q.dequeue(); // That card index has been revealed

    // 2. Move the next card index at the back
    let nextCardIndex = q.front();
    q.dequeue();
    q.enqueue(nextCardIndex);
  }

  return arrangement;
};

let deck = [17, 13, 11, 2, 3, 5, 7];
console.log(deckRevealedIncreasing(deck));
