class RangeModule {
    constructor() {
        this.range = [];
    }

    addRange(left, right) {
        let interval = [left, right];

        if (this.range.length > 0) {
            let resultIntervals = [];
            for (let i = 0; i < this.range.length; i++) {
                // Check if can be added at the left of currentInterval
                if (interval[1] < this.range[i][0]) {
                    this.range = [interval, ...this.range.slice(i)];
                    return;
                } else if (interval[0] > this.range[i][1]) {
                    resultIntervals.push(this.range[i]);
                } else {
                    // Overlap
                    interval[0] = Math.min(interval[0], this.range[i][0]);
                    interval[1] = Math.max(interval[1], this.range[i][1]);
                }
            }

            // If code reaches here that means we could not place it at the front
            // of any intervals that already existed, so inserting it at end
            resultIntervals.push(interval);
            this.range = resultIntervals;
            return;
        } else {
            this.range.push(interval)
        }
    }
}

/** 
 * Your RangeModule object will be instantiated and called as such:
 * var obj = new RangeModule()
 * obj.addRange(left,right)
 * var param_2 = obj.queryRange(left,right)
 * obj.removeRange(left,right)
 */

let rangeModule = new RangeModule();
rangeModule.addRange(10, 20);
rangeModule.addRange(13, 25);
rangeModule.addRange(8, 14);
rangeModule.addRange(26, 30);
// rangeModule.removeRange(14, 16);
// rangeModule.queryRange(10, 14); // return True,(Every number in [10, 14) is being tracked)
// rangeModule.queryRange(13, 15); // return False,(Numbers like 14, 14.03, 14.17 in [13, 15) are not being tracked)
// rangeModule.queryRange(16, 17); // return True, (The number 16 in [16, 17) is still being tracked, despite the remove operation)