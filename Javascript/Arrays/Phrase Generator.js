function phraseGen(s) {
    let set = new Set();
    let index = 0;

    let phrase = "";
    let result = [];
    while (index < s.length) {
        phrase += s[index];

        // If not already seen
        if (!set.has(phrase)) {
            result.push(phrase);
            set.add(phrase);
            phrase = "";
        }

        index++;
    }

    if (phrase.length > 0) result.push(phrase);

    return result;
}

let s = "googleglgleeeeeooooop";
console.log(phraseGen(s));