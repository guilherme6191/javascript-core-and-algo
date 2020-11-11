// --- Directions
// Write a function that returns the number of vowels
// used in a string.  Vowels are the characters 'a', 'e'
// 'i', 'o', and 'u'.
// --- Examples
//   vowels('Hi There!') --> 3
//   vowels('Why do you ask?') --> 4
//   vowels('Why?') --> 0

const VOWELS = ['a', 'e', 'i', 'o', 'u'];
function vowels(str) {
  let count = 0;
  for (const char of str) {
    if (VOWELS.includes(char.toLowerCase())) {
      count++;
    }
  }
  return count;
}

module.exports = vowels;
