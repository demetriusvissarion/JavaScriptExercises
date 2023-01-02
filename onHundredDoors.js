/*
100 doors in a row are all initially closed. You make 100 passes by the doors. The first time through, you visit every door and toggle the door (if the door is closed, you open it; if it is open, you close it).
The second time you only visit every 2nd door (door #2, #4, #6, ...).
The third time, every 3rd door (door #3, #6, #9, ...), etc, until you only visit the 100th door.

Question: What state are the doors in after the last pass? Which are open, which are closed?

[Source http://rosettacode.org] */

// my solution
const getDoorStates = (numberOfDoors) => {
  // generate array
  let array = new Array(numberOfDoors).fill("closed");
  for (let i = 1; i < array.length + 1; i++) {
    // check if square of index of item is smaller than lenght of array, if it is change it's value to 'open'
    if (Math.pow(i, 2) <= array.length) {
      array[Math.pow(i, 2) - 1] = "open";
    }
    // add numbers to doors for readability
    array[i - 1] = `Door ${i} is: ${array[i - 1]}`;
  }
  let result = array.join(",  ");
  return result;
};

getDoorStates(100);
