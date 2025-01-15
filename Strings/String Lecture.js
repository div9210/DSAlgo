// Named algorithms in string to find a pattern
// String erase function implementation
// 539 : LeetCode
// 647: palindromic substrings : HW : Find the time and space complexity of the below solution
function expand(s, i, j) {
  let count = 0;
  while (i >= 0 && j < s.length && s[i] == s[j]) {
    i--;
    j++;
    count++;
  }
  return count;
}

var countSubstrings = function (s) {
  // Treating every point as a center point and expanding outwards
  let count = 0;
  for (let i = 0; i < s.length; i++) {
    let oddAns = expand(s, i, i);
    let evenAns = expand(s, i, i + 1);
    count += oddAns + evenAns;
  }

  return count;
};

// 2125: Number of Laser Beams in a Bank
function calculateDevices(str) {
  // Calculate the number of times '1' has appeared in the str
  let devices = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] == "1") {
      devices++;
    }
  }
  return devices;
}

var numberOfBeamsPart2 = function (bank) {
  let devicesArray = [];
  for (let i = 0; i < bank.length; i++) {
    devicesArray.push(calculateDevices(bank[i]));
  }
  let totalBeams = 0;
  for (let i = 0; i < devicesArray.length - 1; i++) {
    let upcoming = i + 1;
    while (devicesArray[upcoming] === 0) {
      upcoming++;
    }

    totalBeams += devicesArray[i] * (devicesArray[upcoming] || 0);
  }

  return totalBeams;
};

//   Valid Anagram (D)
//   Reverse Only Letters (D)
//   Longest Common Prefix
//   Reverse Vowels of a String
//   Isomorphic Strings
//   Reorganise String
//   Group Anagrams
//   Longest Palindromic Substring
//   Find the Index of the First Occurrence in a String
//   String to Integer (atoi)
//   String Compression
//   Integer to Roman
//   Zig-zag Conversion
//   Largest Number
//   Remove All Adjacent Duplicates In the String-II
//   Minimum Time Difference
//   Number of Laser Beams in a Bank
//   Implement std::string::erase() - Will be convered in OOPS Week
