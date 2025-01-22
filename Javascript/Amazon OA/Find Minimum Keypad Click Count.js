function minKeypadClickCount(letters) {
    // Step 1: Count frequency of each letter
    const freqMap = {};
    for (let char of letters) {
        if (freqMap[char]) {
            freqMap[char]++;
        } else {
            freqMap[char] = 1;
        }
    }

    // Step 2: Sort letters by frequency in descending order
    const sortedLetters = Object.keys(freqMap).sort((a, b) => freqMap[b] - freqMap[a]);

    // Step 3: Assign clicks based on frequency
    const clicksRequired = {};
    let click = 1;
    let used = 0;
    for (let i = 0; i < sortedLetters.length; i++) {
        clicksRequired[sortedLetters[i]] = click;
        used++;
        if (used == 9) {
            click++;
            used = 0
        }
    }

    // Step 4: Calculate total clicks needed for the input string
    let totalClicks = 0;
    for (let char of letters) {
        totalClicks += clicksRequired[char];
    }

    return totalClicks;
}

// Test cases
console.log(minKeypadClickCount("abacadefghibj")); // Output: 14
