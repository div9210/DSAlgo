var minTrips = function (packageW) {
    let count = {} // Unordered map
    for (let w of packageW) {
        if (!count[w]) count[w] = 0;
        count[w]++;
    }

    let trips = 0;
    // Try to divide each count by 3 or by 2
    for (let key in count) {
        let countofPackage = count[key];
        // 4 is a special case bcz it can be grouped into 3 package trips
        // But if you do so, you will be left with 1 package making it incorrect while you could have taken 2 packages twice
        // Making it deliverable
        while (countofPackage != 4 && countofPackage > 0 && countofPackage >= 3) {
            trips++;
            countofPackage -= 3;
        }
        if (countofPackage == 4) {
            trips += 2;
            continue;
        }
        else {
            if (countofPackage == 0) continue;
            else if (countofPackage % 2 != 0) return -1;
            trips += countofPackage / 2;
        }
    }

    return trips;
}

let packageW = [2, 2, 2, 2, 2, 2, 2, 1, 1, 5, 5, 5];
console.log(minTrips(packageW));