class DetectSquares {
    constructor() {
        this.pointCount = new Map();
    }

    add(point) {
        const key = `${point[0]},${point[1]}`;
        if (!this.pointCount.has(key)) {
            this.pointCount.set(key, 0);
        }
        this.pointCount.set(key, this.pointCount.get(key) + 1);
    }

    count(point) {
        let count = 0;
        const [a, b] = point;

        for (let key of this.pointCount.keys()) {
            let pt = key.split(',').map(e => Number(e));
            let [c, d] = pt;

            // Check if the points form a diagonal of a square
            if (Math.abs(a - c) === Math.abs(b - d) && a !== c && b !== d) {
                const countAD = this.pointCount.get(`${a},${d}`) || 0;
                const countCB = this.pointCount.get(`${c},${b}`) || 0;

                count += this.pointCount.get(key) * countAD * countCB;
            }
        }

        return count;
    }
}

/** 
 * Your DetectSquares object will be instantiated and called as such:
 * var obj = new DetectSquares()
 * obj.add(point)
 * var param_2 = obj.count(point)
 */