const groupAnagrams = {
  solution1: {
    // speed: 110ms
    // memory : 53.09 mb
    groupAnagrams: function (strs) {
      // Make a map that stores {sortedString : string} order
      const map = new Map();

      // Loop over the string arrays
      for (let i = 0; i < strs.length; i++) {
        const sortedString = strs[i].split("").sort().join("");
        if (map.has(sortedString)) {
          const value = map.get(sortedString);
          value.push(strs[i]);
          map.set(sortedString, value);
        } else {
          map.set(sortedString, [strs[i]]);
        }
      }

      return Array.from(map.values());
    },
  },
  solution2: {
    // speed: 158ms
    // memory: 54.02 mb
    groupAnagrams: function (strs) {
      const map = {};
      for (let i = 0; i < strs.length; i++) {
        const alphabetCount = new Array(26).fill(0);
        const currentStr = strs[i];
        for (let j = 0; j < currentStr.length; j++) {
          alphabetCount[currentStr.charCodeAt(j) - "a".charCodeAt(0)]++;
        }

        if (map[alphabetCount]) {
          map[alphabetCount] = map[alphabetCount].concat(currentStr);
        } else {
          map[alphabetCount] = [currentStr];
        }
      }

      return Object.values(map);
    },
  },
};

const result = groupAnagrams.solution2.groupAnagrams([
  "eat",
  "tea",
  "tan",
  "ate",
  "nat",
  "bat",
]);
console.log("result", result);
