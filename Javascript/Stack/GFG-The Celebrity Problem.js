const { Stack } = require("./Stack");

/**
 * Algorithm: Put everyone in a stack
 * Each time remove two top person and check if they know each other
 * If A knows B, A is not celebrity hence remove A
 * else if B knows A, B is not celebrity hence remove B
 * do it till there is one element in stack
 * When you will have only one element in stack either that person will be celebrity
 * or there is no celebrity in the party matrix
 * So for the final person check if all the columns are 0 i.e he/she doesn't know anyone
 * and all the rows have 1 for that column i.e everyone knows him/her
 */
class Solution {
  verifyCelebrity(M, n, person) {
    // check whether everyone knows the person, and person knows no one
    for (let i = 0; i < n; i++) {
      if (i != person) {
        if (M[i][person] !== 1) {
          return false;
        }

        // Also if he knows anyone he is not the celebrity
        if (M[person][i] == 1) {
          return false;
        }
      }
    }

    return true;
  }
  //Function to find if there is a celebrity in the party or not.
  celebrity(M, n) {
    let stack = new Stack();
    // Store every index in a stack
    for (let i = 0; i < n; i++) {
      stack.push(i);
    }

    while (stack.size() != 1) {
      // Extract 2 person
      let personA = stack.peek();
      stack.pop();
      let personB = stack.peek();
      stack.pop();
      // If personA knows personB
      if (M[personA][personB] == 1) {
        // This means A knows B, thus A cannot be a celebrity
        // B might be
        stack.push(personB);
      } else {
        // If we reach here that means A does not know B
        // Thus B cannot be a celebrity
        // A might be
        stack.push(personA);
      }
    }

    // Now you have one person in stack
    let finalPerson = stack.peek();
    let isCelebrity = this.verifyCelebrity(M, n, finalPerson);
    return isCelebrity ? finalPerson : -1;
  }
}

let M = [
  [0, 1, 0],
  [0, 0, 0],
  [0, 1, 0],
];
let n = 3;
let sol = new Solution();
console.log(sol.celebrity(M, n));
