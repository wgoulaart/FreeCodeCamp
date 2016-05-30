/*
  Free Code Camp Challenge - Factorialize a Number
  https://www.freecodecamp.com/challenges/factorialize-a-numbe
*/
function factorialize(num) {
  var factorial = 1;

  while (num > 1) {
    factorial *= num;
    num--;
  }

  return factorial;
}

factorialize(5); // 120
