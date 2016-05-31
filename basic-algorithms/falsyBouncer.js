/*
  Free Code Camp Challenge  - Falsy Bouncer
  https://www.freecodecamp.com/challenges/falsy-bouncer
*/

function checkFalsy(value) {
  if (typeof(value) === 'string' && value !== "" || typeof(value) === 'number' && !isNaN(value) && value > 0) {
    return true;
  } else {
    return false;
  }
}

function bouncer(arr) {
  var falsyArray = arr.filter(checkFalsy);
  return falsyArray;
}

bouncer([7, "ate", "", false, 9]);
