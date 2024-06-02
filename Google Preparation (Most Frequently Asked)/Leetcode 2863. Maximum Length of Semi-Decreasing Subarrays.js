function maxSubarrayLength(nums) {
    let n = nums.length;
    let st = new Stack(); // Store min indices

    // Start from back and store all of the min indexes
    for (let i = n - 1; i >= 0; i--) {
        if (st.isEmpty() || nums[i] < nums[st.peek()]) {
            st.push(i);
        }
    }

    // Now iterate from forwards and keep calculating the length from stack till we can
    let maxLen = -1;
    for (let i = 0; i < n; i++) {
        while (!st.isEmpty() && nums[st.peek()] < nums[i]) {
            let index = st.peek();
            st.pop();
            let len = index - i + 1;
            maxLen = Math.max(maxLen, len);
        }
    }

    return maxLen;
}

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

let nums = [57, 55, 50, 60, 61,];
console.log(maxSubarrayLength(nums));