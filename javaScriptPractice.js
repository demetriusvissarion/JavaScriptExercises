/* Exercise 1:
--------------
Write a JavaScript program to check two numbers and return true if one of the numbers is 100 or if the sunm of the two numbers is 100
*/

////// my solution
// function checkOneHundred(a, b) {
//   if (a === 100 || b === 100 || a + b === 100) {
//     return true;
//   } else {
//     return false;
//   }
// }

// checkOneHundred(47, 53);
// checkOneHundred(100, 53);
// checkOneHundred(47, 100);
// checkOneHundred(47, 58);

/////// teacher solution
// const checkIf100 = (a, b) => a === 100 || b === 100 || a + b === 100;
// checkIf100(47, 53);
// checkIf100(100, 53);
// checkIf100(47, 100);
// checkIf100(47, 58);

/* --------------------------------------------------------
Exercise 2:
--------------
Write a JavaScript program to get the extension of a filename.
*/
// const getFileExtension = (file) =>
//   `File has the following extension: ${file.slice(file.lastIndexOf(".") + 1)}`;

// getFileExtension("text.txt");
// getFileExtension("webpack.config.js");

/* --------------------------------------------------------
Exercise 3:
--------------
Write a JavaScript program to replace every character in a given string with the character following it in the alphabet.
*/

//////// my solution
// const replaceLetterWithNext = (str) => {
//   let alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ".split(
//     ""
//   );
//   let array = str.split(" ");
//   let result = [];
//   for (item of array) {
//     let convertedWord = item
//       .toString()
//       .split("")
//       .map((x) => alphabet[alphabet.indexOf(x) + 1])
//       .join("");
//     result.push(convertedWord);
//   }
//   return result.join(" ");
// };

// replaceLetterWithNext("This is a test");

///////// teacher solution
// const moveCharsForward = (str) =>
//   str
//     .split("")
//     .map((char) => String.fromCharCode(char.charCodeAt(0) + 1))
//     .join("");

// moveCharsForward("This is a test");

/* --------------------------------------------------------
Exercise 4:
--------------
Write a JavaScript program to get the current date.
Expected Output:
mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy
*/

//////// my solution
// const getCurrentDate = () => {
//   let date = new Date();
//   return `${date.getDate()}-${date.getMonth() + 1}-${date.getFullYear()}`;
// };

// getCurrentDate();

//////// teacher solution
// const formatDate = (date = new Date()) => {
//   const days = date.getDate();
//   const months = date.getMonth() + 1;
//   const years = date.getFullYear();
//   return `${days}/${months}/${years}`;
// };
// formatDate();

/* --------------------------------------------------------
Exercise 5:
--------------
Write a JavaScript program to a new string adding "New!" in front of a given string. If the given string begins with "New!" already then return the original string.
*/

///////// my solution
// const addNew = (str) => (str.substring(0, 4) === "New!" ? str : `New! ${str}`);

// addNew("adidas");
// addNew("New! nike");

// ///////// teacher solution
// const addNew2 = (str) => (str.indexof("New!") === 0 ? str : `New! ${str}`);

// addNew("adidas");
// addNew("New! nike");

/* --------------------------------------------------------
Exercise 6:
--------------
Write the smallest program that outputs the lyrics of the Xmas carol The Twelve Days of Xmas.
You must reproduce the words in the correct order, but case, format, and punctuation are left to your discretion.

The lyrics are as follows:

On the first day of Christmas
My true love gave to me:
A partridge in a pear tree.

On the second day of Christmas
My true love gave to me:
Two turtle doves and
A partridge in a pear tree.

On the third day of Christmas
My true love gave to me:
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the fourth day of Christmas
My true love gave to me:
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the fifth day of Christmas
My true love gave to me:
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the sixth day of Christmas,
My true love gave to me:
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the seventh day of Christmas,
My true love gave to me:
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the eight day of Christmas,
My true love gave to me:
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the ninth day of Christmas,
My true love gave to me:
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the tenth day of Christmas,
My true love gave to me:
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the eleventh day of Christmas,
My true love gave to me:
Eleven pipers piping
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

On the twelfth day of Christmas,
My true love gave to me:
Twelve drummers drumming
Eleven pipers piping
Ten lords a-leaping
Nine ladies dancing
Eight maids a-milking
Seven swans a-swimming
Six geese a-laying
Five golden rings
Four calling birds
Three french hens
Two turtle doves and
A partridge in a pear tree.

[Source https://rosettacode.org]

*/

const lyrics12DaysOfXmas = () => {
  const days = [
    "second",
    "third",
    "fourth",
    "fifth",
    "sixth",
    "seventh",
    "eight",
    "ninth",
    "tenth",
    "eleventh",
    "twelfth",
  ];
  let counter = 1;
  let fullLyrics = [];
  let firstVerse =
    "On the first day of Christmas, \nMy true love gave to me: \nA partridge in a pear tree.";
  console.log(firstVerse);
  for (let day of days) {
    let firstLines = `On the ${day} day of Christmas, \nMy true love gave to me:`;
    let lastLine = "A partridge in a pear tree.";
    const lines = [
      "Two turtle doves and",
      "Three french hens",
      "Four calling birds",
      "Five golden rings",
      "Six geese a-laying",
      "Seven swans a-swimming",
      "Eight maids a-milking",
      "Nine ladies dancing",
      "Ten lords a-leaping",
      "Eleven pipers piping",
      "Twelve drummers drumming",
    ];
    let indexRange = (arr, start, end) => {
      return arr.slice(start, end);
    };
    let verse =
      firstLines +
      "\n" +
      indexRange(lines, 0, counter).reverse().join("\n") +
      "\n" +
      lastLine;

    console.log(verse);
    // fullLyrics.push(`${verse} \n`);
    counter++;
  }
  // console.log(fullLyrics);
};
lyrics12DaysOfXmas();
