// --- Directions
// Given a string, return true if the string is a palindrome
// or false if it is not.  Palindromes are strings that
// form the same word if it is reversed. *Do* include spaces
// and punctuation in determining if the string is a palindrome.
// --- Examples:
//   palindrome("abba") === true
//   palindrome("abcdefg") === false

function palindrome(str) {
  // loop str
  // compare to correspondent index value
  // finish in the middle
  const cursor = parseInt(str.length / 2);

  let i = 0;
  let result = true;
  while (i < cursor && result) {
    if (str[i] !== str[str.length - i - 1]) {
      result = false;
    }
    i++;
  }
  return result;
}

module.exports = palindrome;

// function palindrome(str) {
//   return str === str.split('').reverse().join('');
// }

// function palindrome(str) {
//   // loop str
//   // compare to correspondent index value
//   // finish in the middle
//   const count = str.length % 2 == 0 ? (str.length / 2) -1 : Math.round(str.length / 2);
//   let i = 0;
//   let result = true;
//   while (i <= count && result) {
//     if (str[i] !== str[(str.length-i)-1]) {
//       result = false;
//     }
//     i++;
//   }
//   return result;
// }
