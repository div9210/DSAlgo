const { MaxHeap } = require("./MaxHeap");

var minStoneSum = function (piles, k) {
  let maxHeap = new MaxHeap();

  // Process each element
  for (let i = 0; i < piles.length; i++) {
    maxHeap.insert(piles[i]);
  }

  // Start removing elements k times
  while (k) {
    let max = maxHeap.getRoot();
    maxHeap.delete();

    // Insert back what remains after removing Math.floor(max / 2) i.e ceil(max / 2)
    let insertBack = Math.ceil(max / 2);
    maxHeap.insert(insertBack);
    k--;
  }

  // Now add the remaining elements in heap
  let remainingElements = maxHeap.elements.slice(1, maxHeap.elements.length);
  let sum = 0;
  remainingElements.forEach((pile) => {
    sum += pile;
  });

  return sum;
};
