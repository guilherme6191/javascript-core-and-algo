// --- Directions
// Given an integer, return an integer that is the reverse
// ordering of numbers.
// --- Examples
//   reverseInt(15) === 51
//   reverseInt(981) === 189
//   reverseInt(500) === 5
//   reverseInt(-15) === -51
//   reverseInt(-90) === -9

function reverseInt(n) {
  // isNegative handling apart
  // get modd of n % 10, push result to string
  // divide n by 10
  // looping until we get 0

  return parseInt(n.toString().split('').reverse().join('')) * Math.sign(n);
}

module.exports = reverseInt;

// function reverseInt(n) {
//   // isNegative handling apart
//   // get modd of n % 10, push result to string
//   // divide n by 10
//   // looping until we get 0

//   const isNegative = Math.sign(n);
//   let absN = Math.abs(n);
//   let result = '';
//   while (absN || absN >= 1) {
//     result = result + (absN % 10);
//     absN = parseInt(absN / 10);
//   }
//   return parseInt(result || 0) * isNegative;
// }
