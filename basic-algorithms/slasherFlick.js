/*
  Free Code Camp Challenge  - Slasher Flick
  https://www.freecodecamp.com/challenges/slasher-flick
*/

function slasher(arr, howMany) {
  if (howMany < arr.length) {
    arr = arr.slice(howMany);
  } else {
    arr = arr.slice(howMany);
  }

  return arr;
}

console.log(slasher([1, 2, "chicken", 3, "potatoes", "cheese", 4],2));
