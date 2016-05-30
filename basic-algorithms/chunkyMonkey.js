/*
  Free Code Camp Challenge  - Chunky Monkey
  https://www.freecodecamp.com/challenges/chunky-monkey
*/

function chunkArrayInGroups(arr, size) {
  var mainArray = [];

  for (var i = 0; i < arr.length;) {
    mainArray.push(arr.slice(i, i + size));
    i += size;
  }
  
  return mainArray;
}

chunkArrayInGroups([0, 1, 2, 3, 4, 5], 2);
