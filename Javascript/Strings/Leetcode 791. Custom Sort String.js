var customSortString = function (order, s) {
  return s
    .split("")
    .sort((firstChar, secondChar) => {
      return order.indexOf(firstChar) - order.indexOf(secondChar);
    })
    .join("");
};

// Example usage:
const order = "cba";
const s = "abcd";
console.log(customSortString(order, s)); // Output: "cbad"
