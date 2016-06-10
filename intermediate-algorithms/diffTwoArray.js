/*
  Free Code Camp Challenge  - Diff Two Arrays
  https://www.freecodecamp.com/challenges/diff-two-arrays
*/



function diffArray(arr1, arr2) {
  var newArr = [];
  newArr = arr1.concat(arr2);

  function checkDiff(value) {
    if (arr1.indexOf(value) === -1 || arr2.indexOf(value) === -1) {
      return value;
    }
  }

  return newArr.filter(checkDiff);
}

console.log(diffArray([1, 2, 3, 5], [1, 2, 3, 4, 5]));
