function solve(s, currentS, p, currentP) {
  // Base case
  // 1. If both are out of bound
  if (currentS >= s.length && currentP >= p.length) {
    return true;
  }
  // 2. If currentS is out of bound and all the left chars in p are '*'
  if (currentS >= s.length && currentP < p.length) {
    while (currentP < p.length) {
      if (p[currentP] != "*") {
        return false;
      }
      currentP++;
    }
    // If all left in p are indeed '*'
    return true;
  }

  if (s[currentS] == p[currentP] || p[currentP] == "?") {
    // Check recursive call for next set of chars
    return solve(s, currentS + 1, p, currentP + 1);
  }

  // If character is not matching and there is a '*' in p
  if (p[currentP] == "*") {
    // 1. Don't let * consume a character i.e treat * as null | empty.
    let caseA = solve(s, currentS, p, currentP + 1);

    // 2. Let * consume one character from s
    let caseB = solve(s, currentS + 1, p, currentP);

    return caseA || caseB;
  }

  // If code reaches here that means no scope left. So,
  return false;
}

var isMatch = function (s, p) {
  let currentS = 0;
  let currentP = 0;
  return solve(s, currentS, p, currentP);
};

isMatch("aa", "*");
