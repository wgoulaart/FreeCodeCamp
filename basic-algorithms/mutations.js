/*
  Free Code Camp Challenge  - Mutations
  https://www.freecodecamp.com/challenges/mutations
*/

function mutation(arr) {
  var firstElement = arr[0].toLowerCase();
  var secondElement = arr[1].toLowerCase();
  var contains = 0;

  for (var i = 0; i < secondElement.length; i++) {
    contains = firstElement.indexOf(secondElement[i]);

    if (contains !== - 1) {
      return true;
    }
  }

  return false;
}

mutation(["hello", "hey"]);
