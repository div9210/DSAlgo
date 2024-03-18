class Solution {
  isSubset(a1, a2, n, m) {
    // Store a1 into map
    let map1 = new Map();
    for (let num of a1) {
      if (map1.get(num)) {
        map1.set(num, map1.get(num) + 1);
      } else {
        map1.set(num, 1);
      }
    }

    for (let num of a2) {
      if (map1.get(num) && map1.get(num) > 0) {
        map1.set(num, map1.get(num) - 1);
      } else {
        return false;
      }
    }

    return true;
  }
}
