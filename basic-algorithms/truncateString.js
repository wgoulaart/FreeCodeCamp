/*
  Free Code Camp Challenge  - Truncate a string
  https://www.freecodecamp.com/challenges/truncate-a-string
*/

function truncateString(str, num) {
  var initStr = 0;
  if (num <= 3) {
    str = str.slice(initStr, num);
    str += "...";
  } else {
    if (str.length > num) {
      str = str.slice(initStr, (num - 3));
      str += "...";
    }
  }
  return str;
}

console.log(truncateString("A-", 1));
