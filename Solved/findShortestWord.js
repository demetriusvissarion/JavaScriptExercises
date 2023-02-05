// Given a string of words, return the length of the shortest word
// String will never be empty and you do not need to account for different data types.#

function findShort(s) {
  return Math.min(...s.split(" ").map((x) => x.length));
}

// tests
findShort("Today we finished our carrabean holiday");
