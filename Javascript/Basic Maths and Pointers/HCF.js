function gcd(a, b) {
  // Anyone of a or b is zero, then other is the answer
  if (a == 0) return b;
  if (b == 0) return a;

  if (a > b) {
    return gcd(a - b, b);
  } else {
    return gcd(b - a, a);
  }
}

// Also
// LCM * HCF = a * b
// LCM = a*b / HCF

function LCM(a, b) {
  let HCF = gcd(a, b);
  return (a * b) / HCF;
}

// console.log(gcd(30, 36));

console.log(LCM(18, 24));
