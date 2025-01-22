const { Stack } = require("./Stack");

var getCollisionTimes = function (cars) {
  let stack = new Stack();
  // Iterate backwards
  let collisionTimes = [];
  for (let i = cars.length - 1; i >= 0; i--) {
    // Algorithm development
    // Check if collision is possible with the top stack car and pop the car
    // till the collision is not possible
    let currentCarSpeed = cars[i][1];
    while (!stack.isEmpty() && cars[stack.peek()][1] >= currentCarSpeed) {
      // collision not possible
      stack.pop();
    }
    // If somehow we removed all the cars from the stack
    // That means currentCar will not collide with any car ahead
    if (stack.isEmpty()) {
      // No collisions for this car
      collisionTimes[i] = -1;
      stack.push(i);
    } else {
      while (!stack.isEmpty()) {
        // Calculate collision time
        let cTime =
          (cars[stack.peek()][0] - cars[i][0]) /
          (cars[i][1] - cars[stack.peek()][1]);

        if (
          collisionTimes[stack.peek()] == -1 ||
          cTime <= collisionTimes[stack.peek()]
        ) {
          // we are safe
          collisionTimes[i] = cTime;
          break;
        } else {
          stack.pop();
        }
      }
      stack.push(i);
    }
  }

  return collisionTimes;
};
let cars = [
  [3, 4],
  [5, 4],
  [6, 3],
  [9, 1],
];

console.log(getCollisionTimes(cars));
