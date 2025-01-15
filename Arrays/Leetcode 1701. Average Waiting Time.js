/**
 * @param {number[][]} customers
 * @return {number}
 */
var averageWaitingTime = function (customers) {
    let prepStart = customers[0][0];
    let total = 0;
    for (let [start, time] of customers) {
        prepStart = Math.max(prepStart, start);
        let finishTime = prepStart + time;
        let timeTaken = finishTime - start;
        total += timeTaken;

        prepStart = finishTime;
    }

    return total;
};

let customers = [[5, 2], [5, 4], [10, 3], [20, 1]];
console.log(averageWaitingTime(customers));