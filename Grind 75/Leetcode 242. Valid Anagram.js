/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) {
        return false;
    }

    let charCount = new Map();
    for (let i = 0; i < s.length; i++) {
        if (!charCount.has(s[i])) charCount.set(s[i], 0);

        let count = charCount.get(s[i]);
        count++;
        charCount.set(s[i], count);
    }

    // Move in t and reduce the charCount in map
    for (let i = 0; i < t.length; i++) {
        if (!charCount.has(t[i])) return false;

        let count = charCount.get(t[i]);
        count--;
        if (count == 0) charCount.delete(t[i]);
        else charCount.set(t[i], count);
    }

    return charCount.size == 0;
};

let s = "rat", t = "car";
console.log(isAnagram(s, t));