/**
 * @param {character[][]} matrix
 * @return {number}
 */
function largestAreaHistogram(heights) {
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
        maxA = Math.max(area, maxA);
    }

    return maxA;

    function leftExp(h) {
        st.push(-1); // This is the most left we can go
        let result = new Array(n);
        for (let i = 0; i < n; i++) {
            // Clear out all the equal or greater values from stack
            while (!st.isEmpty() && h[st.peek()] && h[st.peek()] >= h[i]) {
                st.pop();
            }
            result[i] = st.peek();
            st.push(i);
        }
        return result;
    }

    function rightExp(h) {
        st.push(n); // This is the most right we can go
        let result = new Array(n);
        for (let i = n - 1; i >= 0; i--) {
            // Clear out all the equal or greater values from stack
            while (!st.isEmpty() && h[st.peek()] && h[st.peek()] >= h[i]) {
                st.pop();
            }
            result[i] = st.peek();
            st.push(i);
        }
        return result;
    }
}

var maximalRectangle = function (matrix) {
    let histograms = Array(matrix.length);
    histograms[0] = matrix[0].map(e => Number(e));

    let maxA = largestAreaHistogram(histograms[0]);
    // Form histograms at each level and find the max
    for (let i = 1; i < matrix.length; i++) {
        let prevH = histograms[i - 1];
        let currH = matrix[i].map((e) => Number(e));

        // Add both
        histograms[i] = prevH.map((e, index) => {
            if (currH[index] != 0) return e + currH[index];
            else return 0;
        });

        let area = largestAreaHistogram(histograms[i]);
        maxA = Math.max(area, maxA);
    }

    return maxA;
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