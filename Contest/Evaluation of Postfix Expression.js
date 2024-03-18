class Stack {
  constructor() {
    this.items = [];
    this.top = -1;
  }

  push(element) {
    this.items.push(element);
    this.top++;
  }

  pop() {
    if (this.top == -1) {
      return null;
    }
    this.items.pop();
    this.top--;
  }

  peek() {
    if (this.top == -1) {
      // console.log("Stack is empty");
      return null;
    }
    return this.items[this.top];
  }

  isEmpty() {
    return this.top === -1;
  }

  size() {
    return this.top + 1;
  }

  clear() {
    this.items = [];
    this.top = -1;
  }

  getElements() {
    return this.items;
  }
}

class Solution {
  //Function to evaluate a postfix expression.
  evaluatePostfix(S) {
    let numStack = new Stack();

    for (let i = 0; i < S.length; i++) {
      if (!isNaN(S[i])) {
        // char is int
        numStack.push(Number(S[i]));
      } else {
        let num1 = numStack.peek();
        numStack.pop();
        let num2 = numStack.peek();
        numStack.pop();
        let result = this.performOperation(num1, num2, S[i]);
        numStack.push(result);
      }
    }
    let ans = numStack.peek();
    return ans == -0 ? 0 : ans;
  }
  performOperation(num1, num2, operator) {
    if (operator == "+") {
      return num1 + num2;
    } else if (operator == "-") {
      return num2 - num1;
    } else if (operator == "*") {
      return num1 * num2;
    } else {
      return Math.floor(num2 / num1);
    }
  }
}

let sol = new Solution();
let res = sol.evaluatePostfix("18-6*3-8+88-*");
console.log("res", res);
