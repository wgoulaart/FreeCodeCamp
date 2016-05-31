/*
  Free Code Camp Challenge  - Seek and Destroy
  https://www.freecodecamp.com/challenges/seek-and-destroy
  Explanation : https://github.com/Rafase282/My-FreeCodeCamp-Code/wiki/Bonfire-Seek-and-Destroy
*/

function destroyer(arr) {
  var args = arr.slice.call(arguments);
  args.splice(0,1);

  return arr.filter(function(value) {
      return args.indexOf(value) === -1;
  });
}

destroyer([1, 2, 3, 1, 2, 3], 2, 3));
