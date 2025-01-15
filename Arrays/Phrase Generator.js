function phraseGen(s) {
    let set = new Set();
    let index = 0;

    let phrase = "";
    let result = [];

    // O(n) * O(logn)
    while (index < s.length) {
        phrase += s[index]; // String + String Builder + copy elements + reference obj new

        // If not already seen
        // O(logn)
        if (!set.has(phrase)) {
            result.push(phrase);
            set.add(phrase);
            phrase = "";
        }

        index++;
    }

    // The line where i got one hint
    if (phrase.length > 0) result.push(phrase);

    return result;
}

let s = "googleglgleeeeeooooop";
console.log(phraseGen(s));