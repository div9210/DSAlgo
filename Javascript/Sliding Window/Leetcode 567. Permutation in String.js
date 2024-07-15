/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
    if (s2.length < s1.length) return false;

    let matches = 26;
    let s1Count = new Array(26).fill(0);
    let s2Count = new Array(26).fill(0);

    let aCharCode = 'a'.charCodeAt(0);
    for (let i = 0; i < s1.length; i++) {
        let char1 = s1[i];
        s1Count[char1.charCodeAt(0) - aCharCode]++;

        let char2 = s2[i];
        s2Count[char2.charCodeAt(0) - aCharCode]++;
    }

    // Calculate the matches
    for (let i = 0; i < 26; i++) {
        if (s1Count[i] !== s2Count[i]) {
            matches--;
        }
    }

    if (matches == 26) return true;
    // We have processed the first window
    let left = 0, right = s1.length;
    while (right < s2.length) {

        // Include the right char and leave the left char
        let rightChar = s2[right];
        s2Count[rightChar.charCodeAt(0) - aCharCode]++;
        if (s2Count[rightChar.charCodeAt(0) - aCharCode] == s1Count[rightChar.charCodeAt(0) - aCharCode]) {
            matches++;
        } else {
            matches--;
        }
        right++;


        // Leave the left char
        let leftChar = s2[left];
        s2Count[leftChar.charCodeAt(0) - aCharCode]--;
        if (s2Count[leftChar.charCodeAt(0) - aCharCode] == s1Count[leftChar.charCodeAt(0) - aCharCode]) {
            matches++;
        }
        left++;

        if (matches == 26) return true;

    }

    return false;
};

let s1 =
    "abc"
s2 =
    "bbbca";
console.log(checkInclusion(s1, s2));