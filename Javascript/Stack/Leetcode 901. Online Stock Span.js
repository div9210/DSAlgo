const { Stack } = require("./Stack");

// class StockSpanner {
//   constructor() {
//     this.stack = new Stack();
//     this.stack.push(-1);
//     this.stocks = [];
//     this.index = -1;
//   }
//   next(val) {
//     this.index++;
//     this.stocks[this.index] = val;
//     while (!this.stack.isEmpty() && this.stocks[this.stack.peek()] <= val) {
//       this.stack.pop();
//     }

//     let span = this.index - this.stack.peek();
//     this.stack.push(this.index);
//     return span;
//   }
// }

class StockSpanner {
  constructor() {
    this.stack = new Stack();
    this.stack.push({ val: Number.MAX_SAFE_INTEGER, index: -1 });
    this.index = -1;
  }
  next(val) {
    this.index++;
    while (!this.stack.isEmpty() && this.stack.peek().val <= val) {
      this.stack.pop();
    }

    let span = this.index - this.stack.peek().index;
    this.stack.push({ val: val, index: this.index });
    return span;
  }
}

const sp = new StockSpanner();
let arr = [];
arr.push(sp.next(31));
arr.push(sp.next(41));
arr.push(sp.next(48));
arr.push(sp.next(59));
arr.push(sp.next(79));
console.log(arr);
