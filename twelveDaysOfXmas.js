/* --------------------------------------------------------
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

    // console.log(verse);
    fullLyrics.push([verse]);
    counter++;
  }
  console.log(firstVerse + "\n\n" + fullLyrics.join("\n\n"));
};
lyrics12DaysOfXmas();
