var removeOccurrences = function (s, part) {
  let firstOccuringIndex = s.indexOf(part);

  while (firstOccuringIndex !== -1) {
    s =
      s.substring(0, firstOccuringIndex) +
      s.substring(firstOccuringIndex + part.length, s.length);
    firstOccuringIndex = s.indexOf(part);
  }
  return s;
};

const result = removeOccurrences("daabcbaabcbc", "abc");
console.log({
  result,
});
