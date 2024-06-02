/**
 * @param {number[]} heights
 * @return {number}
 */
var largestRectangleArea = function (heights) {
    let n = heights.length;
    let st = new Stack();
    let leftExpIndexes = leftExp(heights);
    st.clear();
    let rightExpIndexes = rightExp(heights);

    let maxA = 0;
    for (let i = 0; i < n; i++) {
        let w = rightExpIndexes[i] - leftExpIndexes[i] - 1;
        let h = heights[i];

        let area = w * h;
        maxA = Math.max(maxA, area);
    }

    return maxA;

    function leftExp(h) {
        st.push(-1); // Maximum left we can go
        let result = new Array(n).fill(null);
        for (let i = 0; i < n; i++) {
            // clear all the values from stack that are either equal or greater
            while (!st.isEmpty() && h[st.peek()] && h[st.peek()] >= h[i]) {
                st.pop();
            }
            result[i] = st.peek();
            st.push(i);
        }

        return result;
    }

    function rightExp(h) {
        st.push(n); // Maximum right we can go
        let result = new Array(n).fill(null);
        for (let i = n - 1; i >= 0; i--) {
            // clear all the values from stack that are either equal or greater
            while (!st.isEmpty() && h[st.peek()] && h[st.peek()] >= h[i]) {
                st.pop();
            }
            result[i] = st.peek();
            st.push(i);
        }

        return result;
    }
};

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
        if (this.isEmpty()) {
            console.log("Underflow");
            return;
        }
        this.items.pop();
        this.top = this.isEmpty() ? -1 : this.top - 1;
    }

    peek() {
        if (this.isEmpty()) {
            console.log("Stack is empty");
            return;
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
        this.top = -1
    }
}