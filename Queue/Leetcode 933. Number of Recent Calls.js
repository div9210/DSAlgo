const { Queue } = require("./queue");

class RecentCounter {
  constructor() {
    this.q = new Queue();
  }

  ping(t) {
    // Classify the range
    let minPoint = t - 3000; // range is [minPoint, t]
    // Remove entries from q that are out of range
    while (
      !this.q.isEmpty() &&
      (this.q.front() < minPoint || this.q.front() > t)
    ) {
      this.q.dequeue();
    }

    this.q.enqueue(t);

    return this.q.size();
  }
}
