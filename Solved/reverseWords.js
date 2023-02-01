// Complete the function that accepts a string parameter,
// and reverses each word in the string.
// All spaces in the string should be retained.

function reverseWords(str) {
  return str.split("").reverse().join("").split(" ").reverse().join(" ");
}

// tests
// 01.
reverseWords("Which one is more likely to contain a bug?");
