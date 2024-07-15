function getMaximumGreyness(pixels) {
    const n = pixels.length;
    const m = pixels[0].length;

    // Initialize arrays to count black and white pixels in rows and columns
    let blackRowCount = new Array(n).fill(0);
    let whiteRowCount = new Array(n).fill(0);
    let blackColCount = new Array(m).fill(0);
    let whiteColCount = new Array(m).fill(0);

    // Calculate counts of black and white pixels in each row and column
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            if (pixels[i][j] === '1') {
                blackRowCount[i]++;
                blackColCount[j]++;
            } else {
                whiteRowCount[i]++;
                whiteColCount[j]++;
            }
        }
    }

    // Initialize max grayness to track the maximum grayness found
    let maxGrayness = -Infinity;

    // Calculate grayness for each cell and update maxGrayness if needed
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < m; j++) {
            let grayness = (blackRowCount[i] - whiteRowCount[i]) + (blackColCount[j] - whiteColCount[j]);
            if (grayness > maxGrayness) {
                maxGrayness = grayness;
            }
        }
    }

    return maxGrayness;
}

// Test cases
console.log(getMaximumGreyness(["1010", "0101", "1010"])); // Output: 1
console.log(getMaximumGreyness(["011", "101", "001"]));   // Output: 4
console.log(getMaximumGreyness(["101", "001", "110"]));   // Output: 2
