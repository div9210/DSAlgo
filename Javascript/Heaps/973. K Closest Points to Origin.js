const { MinHeapWithComp } = require("./MinHeap with Comparator");

function EuclideanDistance(coordinate) {
  let x = coordinate[0];
  let y = coordinate[1];

  return x * x + y * y;
}

var kClosest = function (points, k) {
  let minHeap = new MinHeapWithComp((a, b) => a.distance - b.distance);

  for (let i = 0; i < points.length; i++) {
    let coordinate = points[i];
    let distanceToThePower2 = EuclideanDistance(coordinate);
    minHeap.insert({ coordinate, distance: distanceToThePower2 });
  }

  let result = [];
  while (k) {
    let min = minHeap.peek();
    minHeap.extractMin();
    result.push(min.coordinate);
    k--;
  }

  return result;
};
let points = [
    [1, 3],
    [-2, 2],
  ],
  k = 1;
console.log(kClosest(points, k));
