const { Stack } = require("./Stack");
function collisionPossible(prevAst, currAst) {
  if (prevAst < 0) {
    // there is no way in hell currAst will collide
    // doesn't matter which direction currAst is
    return false;
  } else {
    // prevAst is moving right
    // and currAst is moving left only then collision is possible
    if (currAst < 0) {
      return true;
    } else {
      return false;
    }
  }
}

var asteroidCollision = function (asteroids) {
  let stack = new Stack();
  for (let i = 0; i < asteroids.length; i++) {
    if (stack.isEmpty()) {
      stack.push(asteroids[i]);
    } else {
      let currAst = asteroids[i];
      let isCurrDestroyed = false;
      while (!isCurrDestroyed && !stack.isEmpty()) {
        // Play collide collide
        let prevAst = stack.peek();
        if (collisionPossible(prevAst, currAst)) {
          if (Math.abs(currAst) > Math.abs(prevAst)) {
            // Remove prevAst from stack
            stack.pop();
          } else if (Math.abs(prevAst) == Math.abs(currAst)) {
            // Destroy both
            isCurrDestroyed = true;
            stack.pop();
          } else {
            // if currAst is weaker
            // skip
            break;
          }
        } else {
          stack.push(currAst);
          break;
        }
      }
      if (isCurrDestroyed) {
        continue;
      }
      if (stack.isEmpty()) {
        stack.push(currAst);
      }
    }
  }

  return stack.getElements();
};

let asteroids = [8, -8];
console.log(asteroidCollision(asteroids));
