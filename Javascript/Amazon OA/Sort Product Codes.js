function sortCodes(precedence, codes) {
    return codes.sort((a, b) => {
        // Find first differential character
        let diffA = null;
        let diffB = null;
        for (let i = 0; i < Math.min(a.length, b.length); i++) {
            if (a[i] !== b[i]) {
                diffA = a[i];
                diffB = b[i];
                break; // Found first difference, no need to continue
            }
        }

        // Find indices of differential characters in precedence order
        let index1 = precedence.indexOf(diffA);
        let index2 = precedence.indexOf(diffB);

        // If both characters are not found in precedence string, use lexicographical order
        if (index1 === -1 && index2 === -1) {
            return a.localeCompare(b);
        }

        // If only one character is not found, prioritize the found one
        if (index1 === -1) return 1;
        if (index2 === -1) return -1;

        // Compare indices based on precedence order
        if (index1 !== index2) {
            return index1 - index2;
        } else {
            // If characters are the same or both are undefined (strings are equal),
            // sort based on the full strings lexicographically
            return a.localeCompare(b);
        }
    });
}

// Test case
let order = "abcdefghijklmnopqrstuvwxyz";
let productCodes = ["adc", "abc"];
console.log(sortCodes(order, productCodes)); // Output: ["abc", "adc"]
