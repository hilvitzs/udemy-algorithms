// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]


// Option 1
// function chunk(array, size) {
//   const chunked = [];

//   for (let element of array) {
//     const last = chunked[chunked.length - 1];

//     if (!last || last.length === size) {
//       chunked.push([element]);
//     } else {
//       last.push(element);
//     }
//   };

//   return chunked;
// }

// Pseudo Code for option 1

// 1. Create empty array to hold chunks called 'chunked'
// 2. For each element in the *unchunked* array
//  2a. Retrieve the last element in 'chunked'
//  2b. IF last element does not exist, or if its length is equal to chunk size
//    2c. Push a new chunk into 'chunked' with the current element
//  2d. ELSE add the current elemet into the chunk

// Option 2
function chunk(array, size) {
  const chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }

  return chunked;
}

// Pseudo Code for option 2

// 1. Create empty 'chunked' array.
// 2. Create 'index' start at 0.
// 3. While index < array.length
//  3a. Push a slice of length 'size' from 'array' into 'chunked'.
//  3b. Add 'size' to 'index'


module.exports = chunk;
