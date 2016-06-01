/*
  Free Code Camp Challenge  - Where do I belong
  https://www.freecodecamp.com/challenges/where-do-i-belong
*/

function getIndexToIns(arr, num) {
  // add number
  arr.push(num);

  // order array less to more
  arr = arr.sort(function(a,b) {
    return a - b;
  });

  // get index num
  arr = arr.indexOf(num);
  return arr;
}

getIndexToIns([40, 60], 50);
