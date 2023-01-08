// 1.
// Write a program to generate all potential anagrams of an input string.

// For example, the potential anagrams of "biro" are

// biro bior brio broi boir bori
// ibro ibor irbo irob iobr iorb
// rbio rboi ribo riob roib robi
// obir obri oibr oirb orbi orib

// my solution:
const generateAnagrams = (start, word) => {
  if (word.length == 1) {
    return [start + word];
  } else {
    let returnResult = [];
    for (let i = 0; i < word.length; i++) {
      let result = generateAnagrams(
        word[i],
        word.substr(0, i) + word.substr(i + 1)
      );
      for (let j = 0; j < result.length; j++) {
        returnResult.push(start + result[j]);
      }
    }

    return returnResult;
  }
};

// tests:
generateAnagrams("", "biro");

// 2.
// DESCRIPTION:
// An anagram is the result of rearranging the letters of a word to produce a new word (see wikipedia).

// Note: anagrams are case insensitive

// Complete the function to return true if the two arguments given are anagrams of each other; return false otherwise.

// Examples
// "foefet" is an anagram of "toffee"

// "Buckethead" is an anagram of "DeathCubeK"

// my solution:
let isAnagram = function (test, original) {
  test = test.toLowerCase().split("").sort().join("");
  original = original.toLowerCase().split("").sort().join("");

  if (test === original) {
    return true;
  } else {
    return false;
  }
};

// tests:
isAnagram("foefet", "toffee"); // should output: 'The word "foefet" is an anagram of "toffee"'
isAnagram("Twoo", "WooT"); // should ooutput: 'The word "Twoo" is an anagram of "WooT"'

isAnagram("dumble", "bumble"); // should ooutput: 'Characters do not match for test case "dumble", "bumble"'
isAnagram("ound", "round"); // should ooutput: 'Missing characters for test case "ound", "round"'
isAnagram("apple", "pale"); // should ooutput: 'Same letters, but different count'
