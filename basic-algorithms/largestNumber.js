/*
  Free Code Camp Challenge  - Return Largest Numbers in Arrays
  https://www.freecodecamp.com/challenges/return-largest-numbers-in-arrays
*/

function largestOfFour(arr) {
  var largestArray = [];
  var largestNumber;

  for (var i = 0; i < arr.length; i++) {
    largestNumber = 0;

    for (var j = 0; j < arr.length; j++) {
      if (arr[i][j] > largestNumber) {
        largestNumber = arr[i][j];
        largestArray[i] = largestNumber;
      }
    }
  }
  return largestArray;
}

largestOfFour([[13, 27, 18, 26], [4, 5, 1, 3], [32, 35, 37, 39], [1000, 1001, 857, 1]]); //[27,5,39,1001]
