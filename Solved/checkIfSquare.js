// Given an integral number, determine if it's a square number

let isSquare = function (n) {
  if (n < 0) return false;
  return Number.isInteger(Math.sqrt(n));
};

// tests
isSquare(-4);
isSquare(0);
isSquare(4);
isSquare(7);
isSquare(25);
