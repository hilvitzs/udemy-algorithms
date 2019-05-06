// --- Directions
// Given a string, return the character that is most
// commonly used in the string.
// --- Examples
// maxChar("abcccccccd") === "c"
// maxChar("apple 1231111") === "1"


// Option 1
// function maxChar(str) {
//   let chars = {};
//   let max = 0;
//   let maxChar = '';

//   for (let character of str) {
//     chars[character] ? chars[character]++ : chars[character] = 1;
//   }

//   for (let character in chars) {
//     console.log('character', character);
//     if (chars[character] > max) {
//       max = chars[character];
//       maxChar = character;
//     }
//   }

//   return maxChar;
// }


// Option 2
function maxChar(str) {
  let chars = {};

  for (let character of str) {
    chars[character] = chars[character] + 1 || 1;
  }

  return Object.keys(chars).reduce((acc, curr) => {
    if (chars[curr] > acc) {
      return curr;
    } else {
      return acc;
    }
  }, 0);
}

module.exports = maxChar;
