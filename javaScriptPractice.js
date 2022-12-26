/* Exercise 1:
--------------
Write a JavaScript program to check two numbers and return true if one of the numbers is 100 or if the sunm of the two numbers is 100
*/

////// my solution
function checkOneHundred(a, b) {
  if (a === 100 || b === 100 || a + b === 100) {
    return true;
  } else {
    return false;
  }
}

checkOneHundred(47, 53);
checkOneHundred(100, 53);
checkOneHundred(47, 100);
checkOneHundred(47, 58);

/////// teacher solution
const checkIf100 = (a, b) => a === 100 || b === 100 || a + b === 100;
checkIf100(47, 53);
checkIf100(100, 53);
checkIf100(47, 100);
checkIf100(47, 58);
