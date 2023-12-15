var groupAnagrams = function (strs) {
  // This approach will not work with javascript maps
  // Thus you have to use an object instead
  let hashedMap = {};
  if (strs == [""]) {
    return [[""]];
  } else if (strs.length == 1) {
    return [strs];
  }
  for (let i = 0; i < strs.length; i++) {
    const pickedString = strs[i];
    const objMap = [...new Array(26)].fill(0);
    for (let j = 0; j < pickedString.length; j++) {
      objMap[pickedString.charCodeAt(j) - 97]++; // 97 is the char code for 'a'
    }
    hashedMap[objMap] = (hashedMap[objMap] || []).concat(pickedString);
  }
  return Object.values(hashedMap);
};
