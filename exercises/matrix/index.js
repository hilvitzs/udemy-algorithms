// --- Directions
// Write a function that accepts an integer N
// and returns a NxN spiral matrix.
// --- Examples
//   matrix(2)
//     [[1, 2],
//     [4, 3]]
//   matrix(3)
//     [[1, 2, 3],
//     [8, 9, 4],
//     [7, 6, 5]]
//  matrix(4)
//     [[1,   2,  3, 4],
//     [12, 13, 14, 5],
//     [11, 16, 15, 6],
//     [10,  9,  8, 7]]

// function matrix(n) {
//   const results = [];

//   for (let i = 0; i < n; i++) {
//     results.push([]);
//   }

//   let counter = 1;
//   let startColumn = 0;
//   let endColumn = n - 1;
//   let startRow = 0;
//   let endRow = n - 1;
//   while (startColumn <= endColumn && startRow <= endRow) {
//     // Top Row
//     for (let i = startColumn; i <= endColumn; i++) {
//       results[startRow][i] = counter;
//       counter++;
//     };
//     startRow++;

//     // Right column
//     for (let i = startRow; i<= endRow; i++) {
//       // i = 1 endRow = 1 endColumn = 1
//       results[i][endColumn] = counter;
//       counter++;
//       // counter = 4
//     };
//     endColumn--;
//     // endColumn = 0;

//     // Bottom row
//     for (let i = endColumn; i >= startColumn; i--) {
//       // endColumn = 0, startColumn = 0, endRow = 1, counter = 4, i = 0
//       results[endRow][i] = counter;
//       counter++;
//     };
//     endRow--;

//     // Start Column
//     for (let i = endRow; i >= startRow; i--) {
//       results[i][startColumn] = counter;
//       counter++;
//     };
//     startColumn++;
//   };

//   return results;
// }

// matrix(2)

function matrix(n) {
  let array = makeArray(n * n, []);
  let chunked = chunk(array, n);

  console.log(chunked);
}

function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

function makeArray(number, array) {
  if (number > 0) {
    array.unshift(number);
    makeArray(number - 1, array);
  }

  return array;
}

// Option 1 Pseudo Code
// 1. Create empty arrays of arrays called ‘results’
// 2. Create a counter variable, starting at 1
// 3. As long as (start column <= end column) AND (start row <= end row)
//     1. Loop from start column to end column
//         1. At results[start_row][I] assign counter variable
//         2. Increment counter
//     2. Increment start row
//     3. Loop from start row to end row
//         1. At results[I][end_column] assign counter variable
//         2. Increment counter
//     4. Decrement end column
//     5. …repeat for other two sides

module.exports = matrix;
