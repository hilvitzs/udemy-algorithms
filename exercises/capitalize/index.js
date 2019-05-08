// --- Directions
// Write a function that accepts a string.  The function should
// capitalize the first letter of each word in the string then
// return the capitalized string.
// --- Examples
//   capitalize('a short sentence') --> 'A Short Sentence'
//   capitalize('a lazy fox') --> 'A Lazy Fox'
//   capitalize('look, it is working!') --> 'Look, It Is Working!'

// Option 1 - BETTER WAY
function capitalize(str) {
  const words = [];

  for (let word of str.split(' ')) {
    words.push(word[0].toUpperCase() + word.slice(1));
  }

  return words.join(' ');
}

// Pseudo Code for Option 1

// 1. Make and empty array 'words'
// 2. Split the input string by spaces to get an array.
// 3. For each word in the array:
//   3a. Uppercase the first letter of the word.
//   3b. Join first letter with the rest of the string.
//   3c. Push result into 'words' array.
// 4. Join 'words' into a string and return it.

// // Option 2 - ISSUES WITH FIRST CHARACTER
// function capitalize(str) {
//   let result = str[0].toUpperCase();

//   for (let i = 1; i < str.length; i++) {
//     if (str[i -1] === ' ') {
//       result += str[i].toUpperCase();
//     } else {
//       result += str[i];
//     }
//   }

//   return result;
// }

// Pseudo Code for Option 2

// 1. Create an empty string called 'result'.
// 2. For each character in the string
//   2a. IF the character to the left is a space
//     2b. Capitalize it and add it to 'result'
//   2c. ELSE Add it to 'result'.

module.exports = capitalize;


