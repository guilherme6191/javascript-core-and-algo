// --- Directions
// Write a function that accepts a positive number N.
// The function should console log a pyramid shape
// with N levels using the # character.  Make sure the
// pyramid has spaces on both the left *and* right hand sides
// --- Examples
//   pyramid(1)
//       '#'
//   pyramid(2)
//       ' # '
//       '###'
//   pyramid(3)
//       '  #  '
//       ' ### '
//       '#####'
// pymarid(5) rows = 5, cols = rows * 2 -1 : 9 - hashTags (row +1)
//     '    #    ' 5
//     '   ###   '  [1,4], [1,5], [1,6]; sum of coordinates: 5, 6 ,7
//     '  #####  ' row (2) => [2,3], [2,4], 2,5, 2,6 ; 2,7: sum of coordinates: 5, 6, 7, 8, 9 // 2,0, 2,1 - 2,8; 2,9 empty
//     ' ####### '  3,2;3,3; 3,4; 3,5; 3,6;3,7; 3,8: 5 > //3,0 3,9
//     '#########' 5

//       '00 01[#] 02'
//       '10[#] 11[#] 12[#]'

// for each row, +2 hashtags
// total hashtags in the last row is (n * 2) -1

function pyramid(n) {
  const cols = n * 2 - 1;
  const midpoint = Math.floor(cols / 2);
  for (let row = 0; row < n; row++) {
    let line = '';
    for (let col = 0; col < cols; col++) {
      if (midpoint - row <= col && midpoint + row >= col) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
  }
}

module.exports = pyramid;
