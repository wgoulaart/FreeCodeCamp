/*
  Free Code Camp Challenge  - Repeat a string repeat a string
  https://www.freecodecamp.com/challenges/repeat-a-string-repeat-a-string
*/

function repeatStringNumTimes(str, num) {
  var repeatString = "";

  while (num > 0) {
    repeatString += str;
    num--;
  }
  
  return repeatString;
}

repeatStringNumTimes("abc", 0);
