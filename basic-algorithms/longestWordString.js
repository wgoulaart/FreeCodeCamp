/*
  Free Code Camp Challenge  - Find the Longest Word in a String
  https://www.freecodecamp.com/challenges/find-the-longest-word-in-a-string
*/

function findLongestWord(str) {
  var longestWord = "";
  str = str.split(" ");

  for (var i = 0; i < str.length; i++) {
    if (str[i].length > longestWord.length) {
      longestWord = str[i];
    }
  }

  return longestWord.length;
}

findLongestWord("What is the average airspeed velocity of an unladen swallow"));
