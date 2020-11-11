// --- Directions
// Check to see if two provided strings are anagrams of eachother.
// One string is an anagram of another if it uses the same characters
// in the same quantity. Only consider characters, not spaces
// or punctuation.  Consider capital letters to be the same as lower case
// --- Examples
//   anagrams('rail safety', 'fairy tales') --> True
//   anagrams('RAIL! SAFETY!', 'fairy tales') --> True
//   anagrams('Hi there', 'Bye there') --> False

function anagrams(stringA, stringB) {
  return cleanUp(stringA) === cleanUp(stringB);
}

function cleanUp(str) {
  return str
    .replace(/[^\w]+/g, '')
    .toLowerCase()
    .split('')
    .sort()
    .join('');
}

module.exports = anagrams;

// function anagrams(stringA, stringB) {
//   // strip out special characters and ponctuation
//   // return false if lengthA !== lengthB
//   // convert into arrays
//   // loop A, for each letter find a pair, remove that pair from B

//   const wordA = stringA.replace(/[^a-zA-Z]+/g, '').toLowerCase();
//   const wordB = stringB.replace(/[^a-zA-Z]+/g, '').toLowerCase();

//   if (wordA.length !== wordB.length) {
//     return false;
//   }
//   const arrA = wordA.split('');
//   let arrB = wordB.split('');

//   for (let char of arrA) {
//     const i = arrB.indexOf(char);
//     if (i < 0) {
//       return false;
//     } else {
//       arrB.splice(i, 1);
//     }
//   }
//   return true;
// }

// function anagrams(stringA, stringB) {
//   // strip out special characters and ponctuation
//   // return false if lengthA !== lengthB
//   // convert into arrays
//   // loop A, for each letter find a pair, remove that pair from B

//   const charMapA = buildMap(stringA);
//   const charMapB = buildMap(stringB);

//   if (Object.keys(charMapA).length !== Object.keys(charMapB).length) {
//     return false;
//   }

//   for (let key in charMapA) {
//     if (charMapA[key] !== charMapB[key]) {
//       return false;
//     }
//   }
//   return true;
// }

// function buildMap(str) {
//   let charMap = {};

//   for (let char of str.replace(/[^\w]+/g, '').toLowerCase()) {
//     charMap[char] = charMap[char] + 1 || 1;
//   }
//   return charMap;
// }
