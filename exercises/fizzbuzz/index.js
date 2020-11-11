// --- Directions
// Write a program that console logs the numbers
// from 1 to n. But for multiples of three print
// “fizz” instead of the number and for the multiples
// of five print “buzz”. For numbers which are multiples
// of both three and five print “fizzbuzz”.
// --- Example
//   fizzBuzz(5);
//   1
//   2
//   fizz
//   4
//   buzz

function fizzBuzz(n) {
  // loop i = 0 to n
  // condition if fizz concatenates
  // condition if buzz concatenates

  let i = 1;
  while (i <= n) {
    let fizz = '';
    let buzz = '';
    if (i % 3 === 0) {
      fizz = 'fizz';
    }
    if (i % 5 === 0) {
      buzz = 'buzz';
    }
    console.log(fizz + buzz || i);
    i++;
  }
}

module.exports = fizzBuzz;

// function fizzBuzz(n) {
//   // loop i = 0 to n
//   // condition if fizz concatenates
//   // condition if buzz concatenates

//   let i = 1;
//   while (i <= n) {
//     let log = '';
//     if (i % 3 === 0) {
//       log += 'fizz';
//     }
//     if (i % 5 === 0) {
//       log += 'buzz';
//     }
//     console.log(log || i);
//     i++;
//   }
// }


// function fizzBuzz(n) {

//   let i = 1;
//   while (i <= n) {
//     let fizz = '';
//     let buzz = '';
//     if (i % 3 === 0) {
//       fizz = 'fizz';
//     }
//     if (i % 5 === 0) {
//       buzz = 'buzz';
//     }
//     console.log(fizz + buzz || );
//     i++;
//   }
// }
