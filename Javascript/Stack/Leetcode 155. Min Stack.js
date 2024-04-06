// class MinStack {
//   constructor() {
//     this.elements = [];
//     this.topIndex = -1;
//     this.min = Number.MAX_SAFE_INTEGER;
//   }
//   push(val) {
//     this.topIndex++;
//     this.min = this.min < val ? this.min : val;
//     this.elements[this.topIndex] = {
//       val: val,
//       min: this.min,
//     };
//     return null;
//   }

//   pop() {
//     if (this.topIndex == -1) {
//       console.log("Underflow");
//     } else {
//       this.elements[this.topIndex] = null;
//       this.topIndex--;

//       // If after removal topIndex became -1
//       if (this.topIndex == -1) {
//         // Reset
//         this.elements = [];
//         this.topIndex = -1;
//         this.min = Number.MAX_SAFE_INTEGER;
//       } else {
//         // Update min
//         this.min = this.elements[this.topIndex].min;
//       }
//     }

//     return null;
//   }

//   top() {
//     if (this.topIndex == -1) {
//       return null;
//     }

//     return this.elements[this.topIndex].val;
//   }

//   getMin() {
//     if (this.topIndex == -1) {
//       return null;
//     }

//     return this.elements[this.topIndex].min;
//   }
// }

// Alternate Better Approach
// Without maintaining a min at class level

class MinStack {
  constructor() {
    this.topIndex = -1;
    this.arr = [];
  }

  push(val) {
    this.topIndex++;
    // If this is the first element of stack
    if (this.topIndex == 0) {
      this.arr[this.topIndex] = {
        val: val,
        min: val,
      };
    } else {
      // It already has some elements
      // Check the previous min
      // and compare it with val
      this.arr[this.topIndex] = {
        val: val,
        min:
          this.arr[this.topIndex - 1].min < val // checking the previous min
            ? this.arr[this.topIndex - 1].min
            : val,
      };
    }

    return null;
  }
  pop() {
    // Remove topIndex
    if (this.topIndex == -1) {
      console.log("UNDERFLOW");
    } else {
      this.arr[this.topIndex] = null;
      this.topIndex--;
    }

    return null;
  }
  top() {
    if (this.topIndex == -1) {
      console.log("UNDERFLOW");
      return null;
    } else {
      return this.arr[this.topIndex].val;
    }
  }
  getMin() {
    if (this.topIndex == -1) {
      console.log("UNDERFLOW");
      return null;
    } else {
      return this.arr[this.topIndex].min;
    }
  }
}

let minStack = new MinStack();
console.log("MinStack created");

console.log("push(-10):", minStack.push(-10)); // ["MinStack","push"]
console.log("push(14):", minStack.push(14)); // ["MinStack","push"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("push(-20):", minStack.push(-20)); // ["push"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("top():", minStack.top()); // ["top"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("pop():", minStack.pop()); // ["pop"]
console.log("push(10):", minStack.push(10)); // ["push"]
console.log("push(-7):", minStack.push(-7)); // ["push"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("push(-7):", minStack.push(-7)); // ["push"]
console.log("pop():", minStack.pop()); // ["pop"]
console.log("top():", minStack.top()); // ["top"]
console.log("getMin():", minStack.getMin()); // ["getMin"]
console.log("pop():", minStack.pop());
