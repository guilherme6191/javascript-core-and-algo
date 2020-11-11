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

function steps(n) {
  
  const printLevel = (level = 0) => {
    if (level >= n) {
      return;
    }
    let line = ''
    for (let col = 0; col < n; col++) {
      if (col <= level) {
        line += '#';
      } else {
        line += ' ';
      }
    }
    console.log(line);
    printLevel(level +1)
  }
  printLevel();

}

module.exports = steps;


// for (let row = 0; row < n; row++) {
//   let line = '';
//   for (let col = 0; col < n; col++) {
//     if (col <= row) {
//       line += '#';
//     } else {
//       line += ' ';
//     }
//   }
//   console.log(line);
// }

/**
 let hashTags = 1;
  while (hashTags <= n) {
    let str = '';
    for (let i = 1; i <= hashTags; i++) {
      str = str + '#'; 
    }
    for (let j = 1; j <= n - hashTags; j++) { 
      str = str + ' ';
    }
    console.log(str);
    hashTags ++;
  }
 */
