// Very Important Question

// TLE
var canCompleteCircuit = function (gas, cost) {
  let front = 0;
  let rear = 0;
  let balance = 0;
  for (let i = 0; i < gas.length; i++) {
    let totalFuel = gas[rear] + balance;
    while (totalFuel >= cost[rear]) {
      // Movement possible, them move
      balance = totalFuel - cost[rear];
      rear = rear == gas.length - 1 ? 0 : rear + 1;
      // Check if circuit has been completed
      if (rear == front) {
        return rear;
      } else {
        totalFuel = gas[rear] + balance;
      }
    }
    // If movement not possible, and front is at n-1
    if (front == gas.length - 1) {
      return -1;
    }
    front = rear + 1;
    rear = front;
    balance = 0;
  }

  return -1;
};

// Alternate Solution
var canCompleteCircuit = function (gas, cost) {
  let balance = 0;
  let deficit = 0;

  let start = 0;
  for (let i = 0; i < gas.length; i++) {
    balance = balance + gas[i] - cost[i];

    if (balance < 0) {
      // deficit
      deficit = Math.abs(balance);
      // Since there is deficit and we are starting again
      // balance is again 0
      start = i + 1;
      balance = 0;
    }
  }

  // If the loop ends there will be some deficit stored till this point
  // And there will be some balance till this point
  // If our balance covers the deficit the start index will complete the circle
  if (balance - deficit >= 0) {
    return start;
  }

  return -1;
};

let gas = [5, 1, 2, 3, 4],
  cost = [4, 4, 1, 5, 1];
console.log(canCompleteCircuit(gas, cost));
