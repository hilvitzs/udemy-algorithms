// --- Directions
// Implement bubbleSort, selectionSort, and mergeSort

function bubbleSort(arr) {
  // Implement bubblesort
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        const lesser = arr[j + 1];
        arr[j + 1] = arr[j];
        arr[j] = lesser;
      }
    }
  }

  // return the sorted array
  return arr;
}

function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let indexOfMin = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[indexOfMin]) {
        indexOfMin = j;
      }
    }

    if (i !== indexOfMin) {
      let lesser = arr[indexOfMin];
      arr[indexOfMin] = arr[i];
      arr[i] = lesser;
    }
  }

  return arr;
}

function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }

  const center = Math.floor(arr.length / 2);
  const left = arr.slice(0, center);
  const right = arr.slice(center);

  return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
  let results = [];

  while (left.length && right.length) {
    left[0] < right[0] ? results.push(left.shift()) : results.push(right.shift());
  //   if (left[0] < right[0]) {
  //     results.push(left.shift());
  //   } else {
  //     results.push(right.shift());
  //   }
  }

  return [...results, ...left, ...right];
}

module.exports = { bubbleSort, selectionSort, mergeSort, merge };


// // Bubble Sort Pseudo Code
// 1. From i = 0 to < array.length
//     1. From j = 0 to (arra.length - i)
//         1. If the element at js is great than j + 1
//             1. Swap elements at j and j + 1

// // Selection Sort Pseudo Code
// 1. From I = 0 to < array.length
//     1. Assume the element at ‘I’ is the least in the array, assign i to ‘indexOfMin’
//     2. For j from I + 1 to end of array
//         1. See if there is an element with lower value
//             1. If there is, record its index
//     3. IF the index of the current element and the index of the ‘lowest’ element is not the same, swap em

// Merge Sort Pseudo Code


// // Merge Pseudo Code
// 1. Create ‘results’ array
// 2. WHILE there are still elements in both arrays
//     1. IF the first element in the left half is less than the first element in the right half
//         1. SHIFT the element from left into a ‘result’ array
//     2. ELSE
//         1. SHIFT the element from right into a ‘result’ array
//     3. Take everything from the array that still has stuff in it and put it in results

// // Merge Sort Pseudo Code
// 1. Split array until it cannot be split (only has one element)
// 2. Pass arrays with one element to merge function recursively

