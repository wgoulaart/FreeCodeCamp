/*
  Free Code Camp Challenge  - Check for Palindromes
  https://www.freecodecamp.com/challenges/check-for-palindromes
*/

function palindrome(str) {
  var regex = /\W|_/g;
  str = str.replace(regex,"").toLowerCase();

  var strPalindrome = str.replace(regex,"").toLowerCase();
  strPalindrome = strPalindrome.split("").reverse("").join("");

  if (str === strPalindrome) {
    return true;
  } else {
    return false;
  }
}

palindrome("1 eye for of 1 eye.");
