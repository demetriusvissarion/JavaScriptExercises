/*DESCRIPTION:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

Note: The function accepts an integer and returns an integer*/

function squareDigits(num) {
  let arr = String(num).split("").map(Number);
  let result = [];
  for (let item of arr) {
    result.push(Number(item) * Number(item));
  }
  return Number(result.join(""));
}

// Tests
strictEqual(squareDigits(3212), 9414);
strictEqual(squareDigits(2112), 4114);
strictEqual(squareDigits(0), 0);
