/*
  Free Code Camp Challenge  - Sum All Numbers in a Range
  https://www.freecodecamp.com/challenges/sum-all-numbers-in-a-range
*/

function sumAll(arr) {
  var sum = 0;
  smallNumber = Math.min(arr[0], arr[1]);
  biggestNumber = Math.max(arr[0], arr[1]);

  for (var i = smallNumber; i <= biggestNumber; i++) {
    sum += i;
  }

  return sum;
}

sumAll([4, 1]);
