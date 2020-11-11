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

/**
 
 n = 3
  [
   [1, 2, 3], 0
   [8, 9, 4], 1
   [7, 6, 5]  2
  ]

  00, 01, 02
  10, 11, 12
  20, 21, 22

  // row = 0, col = 2
 */

function matrix(n) {
  let result = [];
  for (let index = 0; index < n; index++) {
    result.push([]);
  }
  let counter = 1;
  let startRow = 0;
  let startColumn = 0;
  let endRow = n - 1;
  let endColumn = n - 1;

  while (startColumn <= endColumn && startRow <= endRow) {
    // first row
    for (let col = startColumn; col <= endColumn; col++) {
      result[startRow][col] = counter;
      counter++;
    }
    startRow++;

    // last column
    for (let row = startRow; row <= endRow; row++) {
      result[row][endColumn] = counter;
      counter++;
    }
    endColumn--;

    // last row
    for (let col = endColumn; col >= startColumn; col--) {
      result[endRow][col] = counter;
      counter++;
    }
    endRow--;

    // first colum
    for (let row = endRow; row >= startRow; row--) {
      result[row][startColumn] = counter;
      counter++;
    }
    startColumn++;
  }

  return result;
}

module.exports = matrix;

/**
 * 
 
 while (counter <= n * n) {
    for (let col = 0; col < n; col++) {
      result[rowPointer][col] = counter;
      colPointer++;
      counter++;
    }
    rowPointer++;
    for (let row = rowPointer; row < n; row++) {
      result[row][colPointer] = counter;
      counter++;
      rowPointer++;
    }
    colPointer--;
    for (let col = colPointer; col > steps - 1; col--) {
      result[rowPointer][col] = counter;
      counter++;
      colPointer--;
    }
    rowPointer--;
    steps--;
    for (let row = rowPointer; row > steps - 1; row++) {
      result[row][colPointer] = counter;
      counter++;
      rowPointer++;
    }
  }

  */
