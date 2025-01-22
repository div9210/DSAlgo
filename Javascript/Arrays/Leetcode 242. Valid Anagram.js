const Anagram = {
  solution1: {
    isAnagram: function (s, t) {
      if (s.length !== t.length) return false;

      const alphabets = new Array(26).fill(0);
      //loop over any string
      for (let i = 0; i < s.length; i++) {
        alphabets[s.charCodeAt(i) - "a".charCodeAt(0)]++;
        alphabets[t.charCodeAt(i) - "a".charCodeAt(0)]--;
      }

      // In the end the array should be all 0's as if the number
      // of characters in the s and t are same one of them will increment it
      // and the other one will decrement in the same amount thus, nullifying the effect.
      for (let i = 0; i < alphabets.length; i++) {
        if (alphabets[i] !== 0) {
          return false;
        }
      }

      return true;
    },
  },
  solution2: {
    isAnagram: function (s, t) {
      if (s.length !== t.length) {
        return false;
      }
      const sMap = {};
      const tMap = {};

      for (let i = 0; i < s.length; i++) {
        sMap[s[i]] = (sMap[s[i]] || 0) + 1;
        tMap[t[i]] = (tMap[t[i]] || 0) + 1;
      }

      for (key in sMap) {
        if (!tMap[key]) {
          return false;
        }
        if (sMap[key] !== tMap[key]) {
          return false;
        }
      }

      return true;
    },
  },
  solution3: {
    isAnagram: function (s, t) {
      if (s.length !== t.length) return false;

      for (let i = 0; i < s.length; i++) {
        // find the current character in string 2
        const indexOfChar = t.indexOf(s[i]);
        if (indexOfChar === -1) {
          return false;
        } else {
          t = t.replace(t[indexOfChar], "");
        }
      }

      return t == "";
    },
  },
};

// Solution 1

// Solution 2

// Solution 3
const result = Anagram.solution1.isAnagram("car", "rat");
console.log("result", result);
