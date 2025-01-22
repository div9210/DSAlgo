const { Stack } = require("./Stack");
function buildAns(result) {
  if (result.s.isEmpty()) {
    return;
  }

  let minPath = result.s.peek();
  result.s.pop();
  buildAns(result);
  result.ans += minPath;
}
var simplifyPath = function (path) {
  let s = new Stack();
  let i = 0;
  while (i < path.length) {
    let start = i;
    let end = i + 1;
    while (end < path.length && path[end] != "/") {
      ++end;
    }
    let simplifiedPathTillNow = path.substr(start, end - start);
    i = end;
    if (simplifiedPathTillNow == "/" || simplifiedPathTillNow == "/.") {
      continue;
    }

    if (simplifiedPathTillNow !== "/..") {
      s.push(simplifiedPathTillNow);
    } else if (!s.isEmpty()) {
      s.pop();
    }
  }
  if (s.isEmpty()) {
    return "/";
  }

  let result = {
    ans: "",
    s: s,
  };
  buildAns(result);
  return result.ans;
};

console.log(simplifyPath("/home//foo/"));
