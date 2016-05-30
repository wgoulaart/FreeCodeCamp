/*
  Free Code Camp Challenge  - Confirm the Ending
  https://www.freecodecamp.com/challenges/confirm-the-ending
*/

function confirmEnding(str, target) {
  var endStr = str.length;
  var sizeTarget = target.length;

  str = str.substr((endStr - sizeTarget), sizeTarget);

  return Boolean(str == target);
}

confirmEnding("He has to give me a new name", "na");
