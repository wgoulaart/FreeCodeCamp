/*
  Free Code Camp Challenge  - Caesars Cipher
  https://www.freecodecamp.com/challenges/caesars-cipher
*/

function rot13(str) {
  str = str.split('').map(cipher).join('');

  function cipher(letter) {
    letter = letter.charCodeAt(0);

    // a-z in ASCII
    if (letter < 65 || letter > 90) {
      return String.fromCharCode(letter);
    } else if (letter < 78) {
      // 77 + 13 = 90 = Z
      letter += 13;
    } else {
      letter -= 13;
    }
    return String.fromCharCode(letter);
  }
  return str;
}

// Change the inputs below to test
rot13("SERR CVMMN!");
