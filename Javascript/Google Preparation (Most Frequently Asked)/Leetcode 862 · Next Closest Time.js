export class Solution {
    /**
     * @param time: the given time
     * @return: the next closest time
     */
    nextClosestTime(time) {
        // Parse the minutes from the time string
        let minutes = parseInt(time.substring(0, 2)) * 60 + parseInt(time.substring(3));

        // Create a set to store unique digits from the time
        let digits = new Set();
        for (let char of time.split("")) {
            if (char != ":")
                digits.add(char - '0');
        }

        // Loop to find the next closest time
        while (true) {
            // Increment minutes and handle overflow (wrap around to 0)
            minutes = (minutes + 1) % (24 * 60);

            let hours = Math.floor(minutes / 60);
            let minutesT = minutes % 60;
            let nextTime = [
                Math.floor(hours / 10), // First digit of hour
                hours % 10, // Second digit of hour
                Math.floor(minutesT / 10), // First digit of minutes
                minutesT % 10, // Second digit of minutes
            ];

            // Check if all digits in nextTime are valid (present in the original digits set)
            let isValid = true;
            for (let digit of nextTime) {
                if (!digits.has(digit)) {
                    isValid = false;
                    break;
                }
            }

            // If all digits are valid, return the formatted time string
            if (isValid) {
                return `${nextTime[0]}${nextTime[1]}:${nextTime[2]}${nextTime[3]}`;
            }
        }
    }
}