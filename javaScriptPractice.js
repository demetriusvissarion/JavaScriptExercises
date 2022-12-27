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

/* --------------------------------------------------------
Exercise 2:
--------------
Write a JavaScript program to get the extension of a filename.
*/
const getFileExtension = (file) =>
  `File has the following extension: ${file.slice(file.lastIndexOf(".") + 1)}`;

getFileExtension("text.txt");
getFileExtension("webpack.config.js");

/* --------------------------------------------------------
Exercise 3:
--------------
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

//////// my solution
const replaceLetterWithNext = (str) => {
  let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
    ""
  );
  let array = str.split(" ");
  let result = [];
  for (item of array) {
    let convertedWord = item
      .toString()
      .split("")
      .map((x) => alphabet[alphabet.indexOf(x) + 1])
      .join("");
    result.push(convertedWord);
  }
  return result.join(" ");
};

replaceLetterWithNext("This is a test");

///////// teacher solution
const moveCharsForward = (str) =>
  str
    .split("")
    .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
    .join("");

moveCharsForward("This is a test");

/* --------------------------------------------------------
Exercise 4:
--------------
Write a JavaScript program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

//////// my solution
const getCurrentDate = () => {
  let date = new Date();
  return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
};

getCurrentDate();

//////// teacher solution
const formatDate = (date = new Date()) => {
  const days = date.getDate();
  const months = date.getMonth() + 1;
  const years = date.getFullYear();
  return `${days}/${months}/${years}`;
};
formatDate();
