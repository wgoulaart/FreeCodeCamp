/*
  Free Code Camp Challenge  - Reverse String Free Code Camp
  https://www.freecodecamp.com/challenges/reverse-a-string
*/

function reverseString(str) {
  var placeholder = "";
  str = str.split("");
  str.reverse();

  for (var i = 0; i < str.length; i++) {
    placeholder += str[i];
  }

  return placeholder;
}

reverseString("Hello"); // return olleH
