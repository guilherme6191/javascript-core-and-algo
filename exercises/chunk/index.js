// --- Directions
// Given an array and chunk size, divide the array into many subarrays
// where each subarray is of length size
// --- Examples
// chunk([1, 2, 3, 4], 2) --> [[ 1, 2], [3, 4]]
// chunk([1, 2, 3, 4, 5], 2) --> [[ 1, 2], [3, 4], [5]]
// chunk([1, 2, 3, 4, 5, 6, 7, 8], 3) --> [[ 1, 2, 3], [4, 5, 6], [7, 8]]
// chunk([1, 2, 3, 4, 5], 4) --> [[ 1, 2, 3, 4], [5]]
// chunk([1, 2, 3, 4, 5], 10) --> [[ 1, 2, 3, 4, 5]]

function chunk(array, size) {
  // edge case: size > array => array
  // for each size, remove a chunk
  // add each chunk in result

  let chunked = [];
  let index = 0;

  while (index < array.length) {
    chunked.push(array.slice(index, index + size));
    index += size;
  }
  return chunked;
}

module.exports = chunk;

// function chunk(array, size) {
//   // edge case: size > array => array
//   // for each size, remove a chunk
//   // add each chunk in result

//   if (size > array.length) return [array];

//   let result = [];
//   const runs = Math.ceil(array.length / size);

//   for (let i = 1; i <= runs; i++) {
//     result.push(array.splice(0, size));
//   }

//   return result;
// }

// function chunk(array, size) {
//   // edge case: size > array => array
//   // for each size, remove a chunk
//   // add each chunk in result

//   if (size > array.length) return [array];

//   let result = [];
//   const runs = Math.ceil(array.length / size);
//   let pointer = 0;
//   for (let i = 1; i <= runs; i++) {
//     result.push(array.slice(pointer, pointer+size));
//     pointer += size;
//   }

//   return result;
// }
