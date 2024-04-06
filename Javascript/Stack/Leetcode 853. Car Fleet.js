const { Stack } = require("./Stack");

var carFleet = function (target, position, speed) {
  // I want to sort the postions in such a way that respective
  // speeds does not get lost in the process
  let cars = position.map((pos, i) => {
    return {
      position: pos,
      speed: speed[i],
    };
  });
  // Now sort this combined data structure based on the position
  cars.sort((a, b) => a.position - b.position);

  // position = combinedTargetAndPosition.map((c) => c.position);
  // speed = combinedTargetAndPosition.map((c) => c.speed);
  // After sorting
  // position [ 0, 3, 5, 8, 10 ]
  // speed    [ 1, 3, 1, 4, 2 ]
  // Using stack to maintain fleets
  let stack = new Stack();
  for (let i = 0; i < position.length; i++) {
    let timeForCurrentCar = (target - cars[i].position) / cars[i].speed; // time = distance / speed

    // Remove elements from stack till you find less or equal
    // i.e if a previous car takes less time than us
    // and the are previous in the lane
    // they have to walk with our speed after after they meet us since we are slow
    while (!stack.isEmpty() && stack.peek() <= timeForCurrentCar) {
      stack.pop();
    }
    // Finally combining all the previous over speeded cars into one unit
    // That is us, place us in stack
    stack.push(timeForCurrentCar);
  }

  // Now the number of elements in the stack represents the number of fleets
  return stack.size();
};

let target = 12;
let position = [10, 8, 0, 5, 3];
let speed = [2, 4, 1, 1, 3];
console.log(carFleet(target, position, speed));
