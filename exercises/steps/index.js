// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a step shape
// with N levels using the # character.  Make sure the
// step has spaces on the right hand side!
// --- Examples
//   steps(2)
//       '# '
//       '##'
//   steps(3)
//       '#  '
//       '## '
//       '###'
//   steps(4)
//       '#   '
//       '##  '
//       '### '
//       '####'

// // Option 1
// function steps(n) {
//   for (let row = 0; row < n; row++) {
//     let stair = '';

//     for (let column = 0; column < n; column++) {
//       if (column <= row) {
//         stair += '#';
//       } else {
//         stair += ' ';
//       }
//     }

//     console.log(stair);
//   }
// }

// Option 1 Pseudo Code
// 1. Fron 0 to n (iterate through rows)
//     1. Create an empty string, ‘stair’
//     2. From 0 to n (iterate through columns)
//         1. IF the current column is equal to or less than the current row
//             1. Add a ‘#’ to ‘stair’
//         2. ELSE
//             1. Add a space to ’stair’
//     3. Console log ‘stair’

// Option 2
function steps(n, row = 0, stair = '') {
  if (n === row) {
    return;
  }

  if (n === stair.length) {
    console.log(stair);
    return steps(n, row + 1)
  }

  const add = stair.length <= row ? '#' : ' ';
  steps(n, row, stair + add);
}

// // Clever Solution
// function steps(n) {
//   for (let i = 1; i <= n; i++) {
//     console.log('#'.repeat(i) + ' '.repeat(n-i));
//   }  
// }

// Option 2 Pseudo Code
// 1. If (row === n) then we have hit the end of our problem
// 2. If the ‘stair’ string has a length === n then we are at the end of a row
// 3. If the length of the stair string is less than or equal to the row number we’re working on, we add a ‘#’, otherwise add a space


module.exports = steps;
