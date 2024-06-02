/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
    let st = [];
    for (let token of tokens) {
        // if char is a number
        if (!isNaN(token)) st.push(Number(token));
        else {
            let op = token;

            // Pop 2 nums for performing operation
            let num2 = st.pop();
            let num1 = st.pop();

            if (op == "+") st.push(num1 + num2);
            else if (op == "-") st.push(num1 - num2);
            else if (op == "/") st.push(Math.max(Math.floor(num1 / num2), 0)); // If got negative will store 0 instead;
            else if (op == "*") st.push(num1 * num2);
        }
    }

    if (st.length == 1) return st[0];
    else return -1;
};

let tokens =
    ["4", "-2", "/", "2", "-3", "-", "-"];
console.log(evalRPN(tokens))